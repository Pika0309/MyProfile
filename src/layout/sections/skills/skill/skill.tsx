import React from 'react';
import styled from "styled-components";
import {FlexWapper} from "../../../../components/FlexWapper";
import {Icon} from "../../../../components/icon/Icon";
import {Theme} from "../../../../styles/Theme";
import Poligon from "../../../../assets/image/PolygonBcg.svg"

type SkillPropsType = {
    IconId: string
    // tittle: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <SkillDiv>
            <Block>
                <img src={Poligon}/>
                <Icon IconId={props.IconId} width={"50px"} height={"50px"} viewBox={"0 0 50 50"}/>
                {/*<IconTitle>{props.tittle}</IconTitle>*/}
            </Block>
        </SkillDiv>
    );
};


type DescriptionPropsType = {
    description: string
}

export const Description = (props: DescriptionPropsType) => {
    return (
        <DescriptSkill>{props.description}</DescriptSkill>
    );
};

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px 0px 0px;
    position: relative;
    
    img{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        
        transform: translateY(-13px) translateX(-7px);
    }
`

const DescriptSkill = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: ${Theme.colors.coloTextDescriptTech};
    margin: 150px 0px 40px 0px;
`

const SkillDiv = styled.div`
    
`

// const IconTitle = styled.span`
//
// `