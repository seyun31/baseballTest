import { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"
import progressingBar7 from "../assets/ProgressingBar7.png";

function SeventhStage() {
    const [answer7, setAnswer7] = useState("")
    const navigate = useNavigate();

    const handleAnswer = (e) => {
        setAnswer7(e.target.value);
    }

    const handleNext = () => {
        if(answer7 !== "") {
            sessionStorage.setItem("answer7", answer7);
            navigate("/loading");
        }
    }

    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar7} alt="상태바 7/7" />
        <SubTitle>7 / 7</SubTitle>
        <Title>나의 고향은</Title>
        <ChoiceList value={answer7} onChange={handleAnswer}>
            <option value="" disabled hidden>지역 선택</option>
            <option value="엘 두 키">서울</option>
            <option value="케 쓱">경기 / 인천</option>
            <option value="삼 롯 엔">경상</option>
            <option value="한">충청</option>
            <option value="기">전라</option>
            <option value=" ">기타</option>
        </ChoiceList>
        <NextButton disabled={!answer7} onClick={handleNext}>✅</NextButton>
        </>
    )
}

export default SeventhStage

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

const ChoiceList = styled.select`
    width: 277px;
    height: 59px;
    background-color: #FFFFFF;
    color: black;
    font-family: Inter, sans-serif;
    font-size: 22px;
    text-align: center;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-left: 16px;
    margin-bottom: 42px;

    /* 기본 화살표 제거 */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
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
