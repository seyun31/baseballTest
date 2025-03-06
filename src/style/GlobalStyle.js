import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #FFEB6D;
    margin: 0;
    padding: 0;
    font-family: Inter, sans-serif;
    display: flex;  /*Flexbox 활성화 */
    flex-direction: column; /*세로 정렬 */
    align-items: center;  /*가로 중앙 정렬 */
    justify-content: center;  /*세로 중앙 정렬 */
    min-height: 100vh;  /*화면 전체 높이 */
  }
`;

export default GlobalStyle;
