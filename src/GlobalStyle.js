import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Montserrat";
        font-weight: 400;
        font-style: normal;
        src: url("/fonts/Monsterrat.woff2") format("woff2"),
        url("/fonts/Monsterrat.woff") format("woff");
    }

    @font-face  {
        font-family: "Bitter";
        font-weight: 400;
        font-style: normal;
        src: url("/fonts/Bitter.woff2") format("woff2"),
        url("/fonts/Bitter.woff") format("woff");
    }

    body {
        font-family: ${(props) => props.theme.font.family.default};
        font-size: ${(props) => props.theme.font.size.default};
        line-height: ${(props) => props.theme.font.lineHeight.default};
        color: ${(props) => props.theme.color.text};
    }
`;

export default GlobalStyle;
