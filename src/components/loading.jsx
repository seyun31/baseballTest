import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const createBalls = () => {
      const newBalls = Array.from({ length: 100 }).map(() => ({ // 공 개수 증가
        id: Math.random(),
        left: Math.random() * window.innerWidth, // 랜덤 X 위치
        speed: Math.random() * 3 + 1, // 랜덤 속도 (7초 ~ 10초)
      }));
      setBalls(newBalls);
    };

    createBalls();
    window.addEventListener("resize", createBalls);

    return () => window.removeEventListener("resize", createBalls);
  }, []);

  return (
    <>
    <GlobalStyle />
      <LoadingImage src={loadingImage} alt="모래시계 이미지" />
      <Title>결과 분석중 ...</Title>
      {balls.map((ball) => (
        <Ball
          key={ball.id}
          src={ballImage}
          alt="떨어지는 공"
          left={ball.left} // X 위치 설정
          speed={ball.speed} // 애니메이션 속도 설정
        />
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
