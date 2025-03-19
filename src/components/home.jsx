import { useState, useRef, useEffect } from 'react'
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"
import mainImage from "../assets/baseball.png";
import shareImage from "../assets/share.png";

function Home() {
  const [nickname, setNickname] = useState("");
  const [visitorCount, setVisitorCount] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const countRef = doc(db, "stats", "visitorCount");
      const countSnap = await getDoc(countRef);

      if (countSnap.exists()) {
        setVisitorCount(countSnap.data.count);
        await updateDoc(countRef, { count: countSnap.data.count + 1});
      } else {
        await setDoc(countRef, { count : 1});
        setVisitorCount(1);
      }
    };

    fetchVisitorCount();
  }, []);

  const handleInputChange = (e) => {
    const newNickname = e.target.value;

    if (newNickname.length <= 6) {
      setNickname(newNickname);
    }
  };

  const handleInputClick = (e) => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleStart = () => {
    if(nickname) {
      sessionStorage.setItem("nickname", nickname);
      navigate("/1");
    }
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

  return (
    <>
    <GlobalStyle />
      <Title>나랑 어울리는 {"\n"} <Blue>KBO</Blue> 야구팀은?</Title>
      <LogoImage src={mainImage} alt="메인 이미지" />
      <NameField 
        placeholder="이름을 입력하세요"
        value={nickname}
        onChange={handleInputChange}
        onClick={handleInputClick}
      />
      <StartButton disabled={!nickname} onClick={handleStart}>시작하기</StartButton>
      <CountParticipants>참여자수 | {visitorCount} 명</CountParticipants>
      <ShareTitle>테스트 공유하기 🔗</ShareTitle>
      <ShareImage src={shareImage} alt="공유하기 이미지" onClick={handleShareClick} />
    </>

  )
}

export default Home

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  white-space: pre-line;
`;

const Blue = styled.span`
  color: blue;
`;

const LogoImage = styled.img`
  display: block;
  margin: auto;
`;

const ShareImage = styled.img`
  display: block;
  margin: auto;
  cursor: pointer;
`;

const NameField = styled.input`
  width: 277px;
  height: 59px;
  font-size: 20px;
  color: black;
  border: none;
  border-radius: 30px;
  display: flex;
  text-align: center;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  width: 173px;
  height: 59px;
  background-color: ${({ disabled }) => (disabled ? "#47e97580" : "#47E975")};
  color: black;
  font-size: 22px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-left: 20%;
  margin-bottom: 15px;
  justify-content: center;
`;

const CountParticipants = styled.p`
  font-size: 16px;
  color: black;
  text-align: center;
  margin-bottom: 20px;
`;

const ShareTitle = styled.p`
  font-size: 18px;
  color: black;
  font-weight: 600;
  text-align: center;
`