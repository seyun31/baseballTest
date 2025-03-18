import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 추가
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import loadingImage from "../assets/loadingImage.png";
import ballImage from "../assets/ball.png";

// 떨어지는 애니메이션
const fallAnimation = keyframes`
  from { transform: translateY(-100vh); opacity: 1; }
  to { transform: translateY(100vh); opacity: 1; } /* opacity 유지 */
`;

// 공 스타일
const Ball = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  left: ${(props) => props.left}px;
  animation: ${fallAnimation} ${(props) => props.speed}s linear infinite;
  z-index: -1;
`;

function Loading() {
  const [balls, setBalls] = useState([]);
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 추가

  useEffect(() => {
    // 3초 후 /result 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/result");
    }, 3000);

    const createBalls = () => {
      const newBalls = Array.from({ length: 100 }).map(() => ({
        id: Math.random(),
        left: Math.random() * window.innerWidth,
        speed: Math.random() * 3 + 1,
      }));
      setBalls(newBalls);
    };

    createBalls();
    window.addEventListener("resize", createBalls);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", createBalls);
    };
  }, [navigate]);

  return (
    <>
      <GlobalStyle />
      <LoadingImage src={loadingImage} alt="모래시계 이미지" />
      <Title>결과 분석중 ...</Title>
      {balls.map((ball) => (
        <Ball key={ball.id} src={ballImage} alt="떨어지는 공" left={ball.left} speed={ball.speed} />
      ))}
    </>
  );
}

export default Loading;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  white-space: pre-line;
  margin-bottom: 20px;
`;

const LoadingImage = styled.img`
  display: block;
  margin: auto;
`;
