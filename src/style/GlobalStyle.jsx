import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    * { 
        box-sizing: border-box;
    }
    body {
        font-family: 'NanumSquare', sans-serif !important;
        height: 100%;
    }

    .slick-list {
        display: absolute;
        width: 1100px;
	    right: 145px;
    }

    .slick-dots {
        display: absolute;
        left: 10px;

    }

    .slick-next.slick-arrow {
        position: absolute;
        right: -150px;
    }

    .slick-prev.slick-arrow {
        position: absolute;
        top: 105px;
        left: -230px;
    }

    .slick-next.slick-arrow:before {
        display: none;
    }

    li.slick-active button {
        opacity: .75;
        color: red;
    }


     a {color: #fff; text-decoration: none; outline: none}
     a:hover, a:active {text-decoration: none; background-color: transparent;}

    
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset;
    }
    input, textarea, button {
        font-family: 'NanumSquare', sans-serif !important;
    }
    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }

    .test-css {
        position: absolute;
        bottom: -40px;
        left: 380px;
    }

    .test-css li {
        display: inline-block;
    }

    .test-css li button {
        font-size: 0;
        width: 15px;
        height: 15px;

        margin: 0 5px;

        border: 0;
        outline: 0;

        border-radius: 50%;
        background: #DBDBE1;
    }

    .test-css .slick-active button{
        width: 32px;
        height: 15px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        background: #B1B1B8;
    }

    .test-css li button:before {
        font-size: 2.7rem;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        content: '•';
        border-radius: 50%;
        text-align: center;
        opacity: .75;
        color: #B1B1B8;
    }

    .test-css li.slick-active button:before {
        color: #B1B1B8;
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
    }
    td:not(:last-child), th:not(:last-child) {
        border-right: 1px solid #dddddd;
    }

    th {
        font-weight: bold;
    }
`;
