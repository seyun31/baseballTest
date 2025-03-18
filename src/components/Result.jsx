import { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"

function Result() {
    const navigate = useNavigate();

    const handleStart = () => {
          navigate("/");
      };

    return (
      <>
      <GlobalStyle />
        <Title>00님과 어울리는 야구팀은 00입니다!</Title>
        <StartButton onClick={handleStart}>다시하기</StartButton>
        <ShareTitle>테스트 공유하기 🔗</ShareTitle>
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
  `