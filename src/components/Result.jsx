import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle";
import shareImage from "../assets/share.png";
import kiaImage from "../assets/kia.png";
import hanwhaImage from "../assets/hanwha.png";
import lotteImage from "../assets/lotte.png";
import lgImage from "../assets/lg.png";
import samsungImage from "../assets/samsung.png";
import doosanImage from "../assets/doosan.png";
import ssgImage from "../assets/ssg.png";
import ncImage from "../assets/nc.png";
import kiwoomImage from "../assets/kiwoom.png";
import ktImage from "../assets/kt.png";

function Result() {
    const [nickname, setNickname] = useState("");
    const [answers, setAnswers] = useState([]);
    const [team, setTeam] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const savedNickname = sessionStorage.getItem("nickname");
        if (savedNickname) {
            setNickname(savedNickname);
        }

        // answer1 ~ answer7 불러와서 배열로 변환
        let answersArray = [];
        for (let i = 1; i <= 7; i++) {
            const savedAnswer = sessionStorage.getItem(`answer${i}`);
            if (savedAnswer) {
                answersArray.push(...savedAnswer.split(" "));
            }
        }
        setAnswers(answersArray);

        // 팀별 카운트 배열 초기화 (10개 팀)
        const teamNames = ["기", "한", "롯", "엘", "삼", "두", "쓱", "엔", "키", "케"];
        const teamFullNames = ["기아 타이거즈", "한화 이글스", "롯데 자이언츠", "LG 트윈스", "삼성 라이온즈", "두산 베어스", "SSG 랜더스", "NC 다이노스", "키움 히어로즈", "KT 위즈"]
        let teamsArray = new Array(10).fill(0);

        // answersArray를 돌면서 팀 점수 계산
        for (let char of answersArray) {
            const index = teamNames.indexOf(char); // 해당 글자가 teamNames 배열에 있으면 index 반환
            if (index !== -1) {
                teamsArray[index]++; // 해당 팀 점수 증가
            }
        }

        // 가장 높은 점수를 가진 팀 찾기
        const maxIndex = teamsArray.indexOf(Math.max(...teamsArray)); 
        setTeam(teamFullNames[maxIndex]);
    }, []);

    console.log("Answers:", answers);
    console.log("Selected Team:", team); // 최종적으로 선택된 팀 확인

    const teamImages = {
      "기아 타이거즈": kiaImage,
      "한화 이글스": hanwhaImage,
      "롯데 자이언츠": lotteImage,
      "LG 트윈스": lgImage,
      "삼성 라이온즈": samsungImage,
      "두산 베어스": doosanImage,
      "SSG 랜더스": ssgImage,
      "NC 다이노스": ncImage,
      "키움 히어로즈": kiwoomImage,
      "KT 위즈": ktImage,
  };

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
      <Container>
        <GlobalStyle />
          <MainImage src={teamImages[team]} alt={`${team} 메인 이미지`} />
          <Title>{nickname}님께 {"\n"} 어울리는 야구팀은 {"\n"}{team}!</Title>
          <ResetButton onClick={handleStart}>다시하기</ResetButton>
          <ShareTitle>테스트 공유하기 🔗</ShareTitle>
          <ShareImage src={shareImage} alt="공유하기 이미지" onClick={handleShareClick} />
      </Container>

      </>
    )
  }
  
  export default Result
  
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  white-space: pre-line;
  margin-bottom: 20px;
`;

const ResetButton = styled.button`
  width: 173px;
  height: 59px;
  background-color: #47E975;
  color: black;
  font-size: 22px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 10px;
`;

const ShareTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
`;

const ShareImage = styled.img`
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
`;

const MainImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;
