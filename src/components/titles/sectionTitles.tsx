import styled from "styled-components";
import exp from "node:constants";
import {Theme} from "../../styles/Theme";

export const SkillsTitle = styled.h1`
        font-size: 20px;
        font-weight: 500;
        color: ${Theme.colors.colorTextTitle};
        text-align: center;
        margin: 0px 0px 30px 0px;
`

export const WorksTitle = styled.h1`
    color: ${Theme.colors.colorTextButton};
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    gap: 15px;
`

export const ContactTitle = styled.h1`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: ${Theme.colors.colorTextTitle};
    margin: 0px 0px 30px 0px;
`