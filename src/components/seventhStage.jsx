import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle"
import progressingBar7 from "../assets/progressingBar7.png";

function SeventhStage() {
    return(
        <>
        <GlobalStyle />
        <ProgressingBar src={progressingBar7} alt="상태바 7/7" />
        <SubTitle>7 / 7</SubTitle>
        <Title>나의 고향은</Title>
        <ChoiceList>
            <option value="서울">서울</option>
            <option value="경기 / 인천">경기 / 인천</option>
            <option value="경상">경상</option>
            <option value="충청">충청</option>
            <option value="전라">전라</option>
            <option value="기타">기타</option>
        </ChoiceList>
        <NextButton>✅</NextButton>
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