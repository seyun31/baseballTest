import { useState } from 'react'
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle"
import mainImage from "../assets/baseball.png";

function App() {
  return (
    <>
    <GlobalStyle />
      <Title>나랑 어울리는 {"\n"} <Blue>KBO</Blue> 야구팀은?</Title>
      <Image src={mainImage} alt="메인 이미지" />
      <NameField placeholder="이름을 입력하세요" />
      <StartButton>시작하기</StartButton>
      <CountParticipants>참여자수 | 230,200 명</CountParticipants>
      <ShareTitle>테스트 공유하기 🔗</ShareTitle>
    </>

  )
}

export default App

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  white-space: pre-line;
  `;

const Blue = styled.span`
  color: blue;
`

const Image = styled.img`
  display: block;
  margin: auto;
`

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
`

const StartButton = styled.button`
  width: 173px;
  height: 59px;
  background-color: #47E975;
  color: black;
  font-size: 22px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-left: 50px;
  justify-content: center;
`
const CountParticipants = styled.p`
  font-size: 16px;
  color: black;
  text-align: center;
`
const ShareTitle = styled.p`
  font-size: 18px;
  color: black;
  font-weight: 600;
  text-align: center;
`