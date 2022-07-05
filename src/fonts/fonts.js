import { createGlobalStyle } from 'styled-components';

import Bitter from './Bitter.woff';
import Bitter2 from './Bitter.woff2';

import Montserrat from './Montserrat.woff';
import Montserrat2 from './Montserrat.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Bitter';
        src: url(${Bitter}) format('woff'),
        url(${Bitter2}) format('woff2');
        font-weight: normal;
        font-style: normal;
    };
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('woff'),
        url(${Montserrat2}) format('woff2);
        font-weight: normal;
        font-style: normal;
    };
`;
