import React from 'react';
import {SkillsTitle} from "../../../components/titles/sectionTitles";
import {Description, Skill} from "./skill/skill";
import styled from "styled-components";
import {FlexWapper} from "../../../components/FlexWapper";
import PhotoItem from "../../../assets/image/SkillsBcgPhoto.webp"
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <SkillsSection>
            <Container>
            <SkillsTitle>Skills</SkillsTitle>
            <FlexWapper direction={"row"} justify={"space-between"} wrap={"wrap"}>
                <Block>
                    <Description description={"I have a vast experience in the following web technologies:"}/>
                    <BlockTechStack>
                        <Skill IconId={"html"}/>
                        <Skill IconId={"css"}/>
                        <Skill IconId={"JavaScript"}/>
                        <Skill IconId={"bootstrap"}/>
                    </BlockTechStack>
                </Block>
                <Image src={PhotoItem}/>
            </FlexWapper>
            </Container>
        </SkillsSection>
    );
};

const SkillsSection = styled.section`

`

const Block = styled.div`
    //display: flex;
    //flex-direction: column;
`

const BlockTechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 42px;
`

const Image = styled.img`

`