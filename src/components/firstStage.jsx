import { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"
import progressingBar1 from "../assets/ProgressingBar1.png";

function FirstStage() {
    const [answer1, setAnswer1] = useState("");
    const navigate = useNavigate();

    const handleAnswer = (answer1) => {
        setAnswer1(answer1);
    };

    const handleNext = () => {
        if(answer1 !== "") {
            sessionStorage.setItem("answer1", answer1);
            navigate("/2");
        }
    };

    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar1} alt="상태바 1/7" />
        <SubTitle>1 / 7</SubTitle>
        <Title>중요한 선택을 할 때 {"\n"} 나는 ...</Title>
        <ChoiceButton
            selected={answer1 === "한 롯 기 삼 엘 "}
            onClick={() => handleAnswer("한 롯 기 삼 엘 ")}
        >
            감성적이다
        </ChoiceButton>
        <ChoiceButton
            selected={answer1 === "쓱 두 엔 키 케 "}
            onClick={() => handleAnswer("쓱 두 엔 키 케 ")}
        >
            이성적이다
        </ChoiceButton>
        <NextButton disabled={!answer1} onClick={handleNext}>➡️</NextButton>
        </>
    )
}

export default FirstStage

const ProgressingBar = styled.img`
    display: block;
    margin: auto;
    margin-bottom: 32px;
`;

const SubTitle = styled.h3`
    font-size: 2opx;
    text-align: center;
    white-space: pre-line;
    margin-bottom: 42px;
`

const Title = styled.h1`
    font-size: 32px;
    text-align: center;
    white-space: pre-line;
    margin-bottom: 42px;
`;

const ChoiceButton = styled.button`
    width: 277px;
    height: 59px;
    background-color: ${({ selected }) => (selected ? "#47E975" : "#FFFFFF")};
    color: black;
    font-size: 22px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-left: 50px;
    margin-bottom: 42px;
    justify-content: center;
`;

const NextButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #FFEB6D;
    font-size: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    position: absolute;
    margin-top: 20px;
    right: 76px; 
`;
