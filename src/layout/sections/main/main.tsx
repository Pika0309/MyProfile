import React from 'react';
import {ButtonLinkMain} from "../../../components/button/button";
import styled from "styled-components";
import Avatar from "../../../assets/image/avatar.webp"
import {FlexWapper} from "../../../components/FlexWapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import IconZigzag from "../../../assets/image/zigzags.svg";
import IconPlus from "../../../assets/image/plus.svg";
import IconCube from "../../../assets/image/cube.svg";
import IconEllips from "../../../assets/image/ellipse.svg";
import IconCircles from "../../../assets/image/circlesOne.svg";
import {ImageCircles, ImageCube, ImageEllips, ImagePlus, ImageZigzag} from "./mainIcon/mainIcon";

export const Main = () => {
    return (
        <MainSection>
            <Container>
            <BlockContent>
                <FlexWapper gap={"324px"}>
                    <BlockName>
                        <StyleSpan>Hi👋, I’m a</StyleSpan>
                        <StyleName>Software Developer</StyleName>
                        <StyleP>I’m <span>John Doe</span>, a developer dedicated to making the world a better place one line of
                            code at a time.</StyleP>
                        <ButtonLinkMain href="/#">Hire me</ButtonLinkMain>
                    </BlockName>
                    <BlockImage>
                    <ImageZigzag src={IconZigzag}/>
                    <ImagePlus src={IconPlus}/>
                    <ImageCube src={IconCube}/>
                    <ImageEllips src={IconEllips}/>
                    <ImageCircles src={IconCircles}/>
                    <StyleImg src={Avatar}/>
                    </BlockImage>
                </FlexWapper>
            </BlockContent>
            </Container>
        </MainSection>
    );
};

const MainSection = styled.section`

`

const BlockContent = styled.div`
    height: 495px;
    position: relative;
`

const BlockName = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
    margin: 120px 0px 0px 0px
`

const StyleSpan = styled.span`
    font-size: 28px;
    font-weight: 600;
    color: ${Theme.colors.colorTextName};
`

const StyleName = styled.span`
    font-size: 32px;
    font-weight: 600;
    color: ${Theme.colors.colorTextName};
`

const StyleP = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);

    span {
        font-weight: bold;
    }
`

const StyleImg = styled.img`
    width: 345px;
    height: 390px;
    margin: 54px 0px 0px 0px;
`

const BlockImage = styled.div`
    position: relative;
    ${ImageZigzag}{
        position: absolute;
        transform: translateX(-40px) translateY(30px);
    }
    ${ImagePlus}{
        position: absolute;
        transform: translateX(125px);
    }
    ${ImageCube}{
        position: absolute;
        transform: translateX(335px);
    }
    ${ImageEllips}{
        position: absolute;
        transform: translateY(450px) translateX(-20px);
    }
    ${ImageCircles}{
        position: absolute;
        transform: translateX(245px) translateY(420px);
    }
`