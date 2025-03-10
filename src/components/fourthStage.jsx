import { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"
import progressingBar4 from "../assets/progressingBar4.png";

function FourthStage() {
    const [answer4, setAnswer4] = useState("");
    const navigate = useNavigate();

    const handleAnswer = (answer4) => {
        setAnswer4(answer4);
    }

    const handleNext = () => {
        if(answer4 !== "") {
            navigate("/5");
        }
    }

    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar4} alt="상태바 4/7" />
        <SubTitle>4 / 7</SubTitle>
        <Title>내가 좋아하는 팀의 {"\n"} 우승 횟수가 ...</Title>
        <ChoiceButton>많아야지! 올해도 우승!</ChoiceButton>
        <ChoiceButton>적어도 돼! 앞으로 잘하자!</ChoiceButton>
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