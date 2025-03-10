import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle"
import progressingBar2 from "../assets/progressingBar2.png";

function SecondStage() {
    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar2} alt="상태바 2/7" />
        <SubTitle>2 / 7</SubTitle>
        <Title>나랑 같은 팀을 응원하는 {"\n"} 팬들이 ...</Title>
        <ChoiceButton>많았으면 좋겠다</ChoiceButton>
        <ChoiceButton>적었으면 좋겠다</ChoiceButton>
        <NextButton>➡️</NextButton>
        </>
    )
}

export default SecondStage

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