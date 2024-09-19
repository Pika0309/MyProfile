import React from 'react';
import styled from "styled-components";
import {FlexWapper} from "../../../../components/FlexWapper";
import {Theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";
import exp from "node:constants";

type WorkPropsType = {
    Image: boolean
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <WorkDiv>

            <BlockWork>
                <FlexWapper direction={"column"} align={"center"}>
                    <ImageWork src={props.Image}/>
                    <DescriptionWork> {props.description}</DescriptionWork>
                    <LinkWork href="/#">Learn More ➜</LinkWork>
                </FlexWapper>
            </BlockWork>

        </WorkDiv>
    );
};

type IconPropsType = {
    IconId: string
}

export const IconPorps = (props: IconPropsType) => {
    return (
        <div>
            <Icon IconId={props.IconId} width={"26px"} height={"22px"} viewBox={"0 0 26 22"}/>
        </div>
    );
};

export default Work;

const WorkDiv = styled.div`
    
`

const BlockWork = styled.div`
    height: 100%;
    width: 381px;
    background-color: #262C4D;
    border: 4px solid;
    border-image: repeating-linear-gradient(to left, #0D54BE, #20ECD3) 1;
    color: transparent;
    -webkit-background-clip: border;
`

const ImageWork = styled.img`
    width: 100%;
    height: 276px;
`

const DescriptionWork = styled.p`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${Theme.colors.colorTextButton};
    padding: 20px 10px;
`

const LinkWork = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: ${Theme.colors.colorTextButton};
    text-align: center;
    align-content: center;
    border: 2px solid white;
    border-radius: 4px;
    width: 131px;
    height: 42px;
    margin: 0px 0px 12px 0px;
    
    &:hover{
        background-color: #48528c;
    }
`