import { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"
import progressingBar3 from "../assets/progressingBar3.png";

function ThirdStage() {
    const [answer3, setAnswer3] = useState("");
    const navigate = useNavigate();

    const handleAnswer = (answer3) => {
        setAnswer3(answer3);
    }

    const handleNext = () => {
        if(answer3 !== "") {
            sessionStorage.setItem("answer3", answer3);
            navigate("/4");
        }
    }

    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar3} alt="상태바 3/7" />
        <SubTitle>3 / 7</SubTitle>
        <Title>내가 좋아하는 팀의 {"\n"} 우승 횟수가 ...</Title>
        <ChoiceButton
            selected={answer3 === "기 삼 두 쓱"}
            onClick={() => handleAnswer("기 삼 두 쓱")}
        >
            많아야지! 올해도 우승!
        </ChoiceButton>
        <ChoiceButton 
            selected={answer3 === "엘 롯 한 엔 키 케"}
            onClick={() => handleAnswer("엘 롯 한 엔 키 케")}
        >
            적어도 돼! 앞으로 잘하자!
        </ChoiceButton>
        <NextButton disabled={!answer3} onClick={handleNext}>➡️</NextButton>
        </>
    )
}

export default ThirdStage

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