import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const ButtonLinkMain = styled.a`
    width: 98px;
    height: 42px;
    background-color: ${Theme.colors.colorTextTitle};
    color: ${Theme.colors.colorTextButton};
    text-align: center;
    align-content: center;
    border-radius: 4px;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.29);

    &:hover {
        background-color: #e86868;
        box-shadow: 0px 8px 3px rgba(0, 0, 0, 0.29);;
    }
`

export const ButtonMessage = styled.button`

    background-color: ${Theme.colors.bcgGroundSection};
    border: none;
    border-radius: 4px;
    width: 214px;
    height: 50px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${Theme.colors.colorTextButton};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 15px 0px 0px 30px;

    &:hover {
        background-color: #48528c;
    }
`