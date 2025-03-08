import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle"
import progressingBar3 from "../assets/progressingBar3.png";

function ThirdStage() {
    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar3} alt="상태바 3/7" />
        <SubTitle>3 / 7</SubTitle>
        <Title>내가 좋아하는 팀의 {"\n"} 우승 횟수가 ...</Title>
        <ChoiceButton>많아야지! 올해도 우승!</ChoiceButton>
        <ChoiceButton>적어도 돼! 앞으로 잘하자!</ChoiceButton>
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