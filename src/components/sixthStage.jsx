import { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"
import progressingBar6 from "../assets/ProgressingBar6.png";

function SixthStage() {
    const [answer6, setAnswer6] = useState("");
    const navigate = useNavigate();

    const handleAnswer = (answer6) => {
        setAnswer6(answer6);
    }

    const handleNext = () => {
        if(answer6 !== "") {
            sessionStorage.setItem("answer6", answer6);
            navigate("/7");
        }
    }

    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar6} alt="상태바 6/7" />
        <SubTitle>6 / 7</SubTitle>
        <Title>내가 좋아하는 팀을 {"\n"} 가을 야구에서 ...</Title>
        <ChoiceButton
            selected={answer6 === "엘 기 삼 두 케 쓱"}
            onClick={() => handleAnswer("엘 기 삼 두 케 쓱")}
        >
            보고싶다!
        </ChoiceButton>
        <ChoiceButton
            selected={answer6 === "한 롯 키 엔"}
            onClick={() => handleAnswer("한 롯 키 엔")}
        >
            못봐도 괜찮다.
        </ChoiceButton>
        <NextButton disabled={!answer6} onClick={handleNext}>➡️</NextButton>
        </>
    )
}

export default SixthStage

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
