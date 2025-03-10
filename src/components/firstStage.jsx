import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle"
import progressingBar1 from "../assets/progressingBar1.png";

function FirstStage() {
    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar1} alt="상태바 1/7" />
        <SubTitle>1 / 7</SubTitle>
        <Title>중요한 선택을 할 때 {"\n"} 나는 ...</Title>
        <ChoiceButton>감성적이다</ChoiceButton>
        <ChoiceButton>이성적이다</ChoiceButton>
        <NextButton>➡️</NextButton>
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