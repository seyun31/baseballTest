import React from "react";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import Image404 from "../assets/Image404.png";


function NotFound() {
    return (
        <>
        <GlobalStyle />
        <Image src={Image404} alt="404 이미지" />
        </>
    )
}

export default NotFound;

const Image = styled.img`
    display: block;
    margin: auto;
`;