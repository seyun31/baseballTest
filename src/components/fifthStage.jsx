import { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"
import progressingBar5 from "../assets/ProgressingBar5.png";

function FifthStage() {
    const [answer5, setAnswer5] = useState("");
    const navigate = useNavigate();

    const handleAnswer = (answer5) => {
        setAnswer5(answer5);
    }

    const handleNext = () => {
        if(answer5 !== "") {
            sessionStorage.setItem("answer5", answer5);
            navigate("/6");
        }
    }

    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar5} alt="상태바 5/7" />
        <SubTitle>5 / 7</SubTitle>
        <Title>나의 퍼스널 컬러는? {"\n"} (나에게 잘 어울리는 톤)</Title>
        <ChoiceButton
            selected={answer5 === "쓱 한 키 기 엘"}
            onClick={() => handleAnswer("쓱 한 키 기 엘")}
        >
            웜톤(빨강, 주황..)
        </ChoiceButton>
        <ChoiceButton
            selected={answer5 === "두 삼 롯 케 엔"}
            onClick={() => handleAnswer("두 삼 롯 케 엔")}
        >
            쿨톤(파랑, 검정..)
        </ChoiceButton>
        <NextButton disabled={!answer5} onClick={handleNext}>➡️</NextButton>
        </>
    )
}

export default FifthStage

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
