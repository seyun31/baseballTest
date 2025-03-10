import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle"
import progressingBar5 from "../assets/progressingBar5.png";

function FifthStage() {
    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar5} alt="상태바 5/7" />
        <SubTitle>5 / 7</SubTitle>
        <Title>나의 퍼스널 컬러는? {"\n"} (나에게 잘 어울리는 톤)</Title>
        <ChoiceButton>웜톤(빨강, 주황..)</ChoiceButton>
        <ChoiceButton>쿨톤(파랑, 검정..)</ChoiceButton>
        <NextButton>➡️</NextButton>
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
    background-color: #FFFFFF;
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