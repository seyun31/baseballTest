import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle";
import shareImage from "../assets/share.png";

function Result() {
    const [nickname, setNickname] = useState("");
    const [answers, setAnswers] = useState([]);
    const [team, setTeam] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // ✅ 닉네임 불러오기
        const savedNickname = sessionStorage.getItem("nickname");
        if (savedNickname) {
            setNickname(savedNickname);
        }

        // ✅ answer1 ~ answer7 불러와서 배열로 변환
        let answersArray = [];
        for (let i = 1; i <= 7; i++) {
            const savedAnswer = sessionStorage.getItem(`answer${i}`);
            if (savedAnswer) {
                answersArray.push(...savedAnswer.split(" ")); // 한 글자씩 분리하여 추가
            }
        }
        setAnswers(answersArray);

        // ✅ 팀별 카운트 배열 초기화 (10개 팀)
        const teamNames = ["기", "한", "롯", "엘", "삼", "두", "쓱", "엔", "키", "케"];
        const teamFullNames = ["기아 타이거즈", "한화 이글스", "롯데 자이언트", "LG 트윈스", "삼성 라이온즈", "두산 베어스", "SSG 랜더스", "NC 다이노스", "키움 히어로즈", "KT 위즈"]
        let teamsArray = new Array(10).fill(0);

        // ✅ answersArray를 돌면서 팀 점수 계산
        for (let char of answersArray) {
            const index = teamNames.indexOf(char); // 해당 글자가 teamNames 배열에 있으면 index 반환
            if (index !== -1) {
                teamsArray[index]++; // 해당 팀 점수 증가
            }
        }

        // ✅ 가장 높은 점수를 가진 팀 찾기
        const maxIndex = teamsArray.indexOf(Math.max(...teamsArray)); // 최댓값을 가지는 인덱스 찾기
        setTeam(teamFullNames[maxIndex]); // 가장 많이 선택된 팀 설정
    }, []);

    console.log("Answers:", answers);
    console.log("Selected Team:", team); // ✅ 최종적으로 선택된 팀 확인

    const handleShareClick = async () => {
        try {
          const currentUrl = window.location.href; // 현재 페이지 URL 가져오기
          await navigator.clipboard.writeText(currentUrl); // 클립보드에 복사
          alert("링크 복사 완료! 😝");
        } catch (err) {
          console.error("링크 복사 실패:", err);
          alert("링크 복사 실패 😢"); 
        }
      };

    const handleStart = () => {
          navigate("/");
      };

    return (
      <>
      <GlobalStyle />
        <Title>{nickname}님과 어울리는 야구팀은 {team}입니다!</Title>
        <StartButton onClick={handleStart}>다시하기</StartButton>
        <ShareTitle>테스트 공유하기 🔗</ShareTitle>
        <ShareImage src={shareImage} alt="공유하기 이미지" onClick={handleShareClick} />
      </>
    )
  }
  
  export default Result
  
  const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  white-space: pre-line;
  margin-bottom: 42px;
  `;
  
  const StartButton = styled.button`
    width: 173px;
    height: 59px;
    background-color: #47E975;
    color: black;
    font-size: 22px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-left: 98px;
    justify-content: center;
  `;
  
  const ShareTitle = styled.p`
    font-size: 18px;
    color: black;
    font-weight: 600;
    text-align: center;
  `;

  const ShareImage = styled.img`
  display: block;
  margin: auto;
  cursor: pointer;
  `;