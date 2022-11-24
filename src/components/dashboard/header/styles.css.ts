import { css } from "@emotion/react";

const basicDropDownList = css`
    list-style: none;
    padding:0;
    width: max-content;
    min-width: 230px;
    word-break: break-all;

    @media screen and (max-width: 900px) {
        min-width: 130px;
        max-width: 230px;
    }

    li {
        display: flex;
        flex-direction: column;
        padding: 0.7rem 1rem;
        cursor: pointer;
        
        &:hover {
            background: #424242;
        }

        span {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items:center;

            .ico {
                font-size: 18px;
                padding-right: 10px;
            }
        }
        
    }

`;

const header = css`
    background: #201F24;
    box-sizing: border-box;
    box-shadow: 1px 19px 23px #0000005e;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding:0 1rem;
    height: 72px;
    
    .title {
        font-size: 24px;
        color: #16a34a;
        user-select:none;
        cursor: pointer;
        transition: color .5s;

        &:hover {
            color: #0fcf0f;
        }
    }

    .user-items {
        display: flex;
        flex-direction: row;
        align-items: center;

        .item {
            font-size: 22px;
            
            svg {
                cursor: pointer;
            }

            &:not(:last-child) {
                margin-right: 1.8rem;
            }

        }
        
        img {
            width: 42px;
            height: 42px;
            cursor:pointer;
            object-fit: cover;
            clip-path: circle();
        }
    }

    @media screen and (max-width: 830px) {
        flex-direction: column;
        height: auto;
        background-color: #201f24b5;

        .user-items {
            margin:.5rem 0;
        }

    }
    
`;

const search = css `

    input {
        border: 1px solid #555;
        border-radius: 30px;
        min-width: 300px;
        font-family: sans-serif;
        transition: background .2s ease-in;
        font-weight:bold;
        font-size: 13px;

        &:hover {
            filter:none;
            background: #343434;
        }
    }

    @media screen and (max-width: 830px) {
        input {
            padding: 10px;
            margin-top: 4px;
            min-width: 200px;
        }
    }

`;


export {basicDropDownList, header, search};