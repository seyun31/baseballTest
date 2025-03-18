import { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"
import progressingBar4 from "../assets/ProgressingBar4.png";

function FourthStage() {
    const [answer4, setAnswer4] = useState("");
    const navigate = useNavigate();

    const handleAnswer = (answer4) => {
        setAnswer4(answer4);
    }

    const handleNext = () => {
        if(answer4 !== "") {
            sessionStorage.setItem("answer4", answer4);
            navigate("/5");
        }
    }

    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar4} alt="상태바 4/7" />
        <SubTitle>4 / 7</SubTitle>
        <Title>나는 평소에 {"\n"} 인내심이 ...</Title>
        <ChoiceButton
            selected={answer4 === "한 롯 엔 키"}
            onClick={() => handleAnswer("한 롯 엔 키")}
        >
            많은편이다
        </ChoiceButton>
        <ChoiceButton
            selected={answer4 === "기 엘 삼 두 쓱 케"}
            onClick={() => handleAnswer("기 엘 삼 두 쓱 케")}
        >
            적은편이다
        </ChoiceButton>
        <NextButton disabled={!answer4} onClick={handleNext}>➡️</NextButton>
        </>
    )
}

export default FourthStage

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