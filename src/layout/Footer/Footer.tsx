import React from 'react';
import styled from "styled-components";
import {FooterNav} from "./footerNav/footerNav";
import {FlexWapper} from "../../components/FlexWapper";
import {Container} from "../../components/Container";
import FoneBcg from "../../assets/image/bcgFone.svg"
import FoneBcgTwo from "../../assets/image/bcgFonEnd.svg"
import {Theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <FooterBlock>
            <img src={FoneBcg} alt={"asrg"}/>
            <ImgFon src={FoneBcgTwo} alt={"asrg"}/>
            <ContainerFooter>
                <BlockSocial>
                    <FlexWapper justify={"space-between"}>
                        <FlexWapper direction={"column"} gap={"14px"}>
                            <TitleSocial>My social media links:</TitleSocial>
                            <BlockIcon>
                                <FooterNav IconId={"in"}/>
                                <FooterNav IconId={"whatsApp"}/>
                                <FooterNav IconId={"twitter"}/>
                                <FooterNav IconId={"gmail"}/>
                            </BlockIcon>
                        </FlexWapper>
                        <FlexWapper direction={"column"} align={"center"}>
                            <TitleMoreSocial>More projects I’ve worked on</TitleMoreSocial>
                            <BlockMoreSocial>
                                <FooterNav IconId={"gitHub"}/>
                                <EmailP>@<span>john-doe</span>on github</EmailP>
                            </BlockMoreSocial>
                        </FlexWapper>
                    </FlexWapper>
                </BlockSocial>
            </ContainerFooter>
        </FooterBlock>
    );
};

const FooterBlock = styled.footer`

    position: relative;

    img {
        position: absolute;
        z-index: -1;
        width: 100%;
    }

`

const ImgFon = styled.img`
    top: 250px;
`

const TitleSocial = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${Theme.colors.colorTextButton};
`

const BlockSocial = styled.div`
    
`

const BlockIcon = styled.div`
    display: flex;
    gap: 65px;
`

const TitleMoreSocial = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${Theme.colors.colorTextButton};
`

const BlockMoreSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
`

const EmailP = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: ${Theme.colors.colorTextButton};

    span {
        background-image: repeating-linear-gradient(#20ECD3, #20d4ec);
        color: transparent;
        -webkit-background-clip: text;
    }
`

const ContainerFooter = styled.div`
    padding: 0px 15px;
    margin: 0 auto;
    border: 1px solid red;
    max-width: 1250px;
    width: 100%;
    min-height: 100%;
    transform: translateY(180px);
`