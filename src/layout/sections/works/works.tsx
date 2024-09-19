import React from 'react';
import styled from "styled-components";
import {IconPorps, Work} from "./work/work";
import PhotoWork from "../../../assets/image/WorkOne.png"
import PhotoWorkTwo from "../../../assets/image/WorkTwo.png"
import PhotoWorkThree from "../../../assets/image/WorkThree.png"
import {FlexWapper} from "../../../components/FlexWapper";
import {WorksTitle} from "../../../components/titles/sectionTitles";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Works = () => {
    return (
        <WorksSection>
            <Container>
            <WorksTitle><IconPorps IconId={"gearsWhite"}/>Projects</WorksTitle>
            <DescriptionTitle>A select number of projects</DescriptionTitle>
            <BlockWork>
                    <Work Image={PhotoWork} description={"Made a social media manager template using HTML 5, CSS and JS."}/>
                    <Work Image={PhotoWorkTwo} description={"Made a simple card page using HTML 5 and  CSS 3."}/>
                    <Work Image={PhotoWorkThree} description={"Made an I.P address tracking website."}/>
            </BlockWork>
            </Container>
        </WorksSection>
    );
};

const WorksSection = styled.section`

`

const DescriptionTitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: ${Theme.colors.colorTextButton};
`

const BlockWork = styled.div`
    display: flex;
    justify-content: center;
    gap: 58px;
    margin: 0px 0px 20px 0px;
`