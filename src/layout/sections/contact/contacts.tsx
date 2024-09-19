import React from 'react';
import {ContactTitle} from "../../../components/titles/sectionTitles";
import styled from "styled-components";
import PhotoChat from "../../../assets/image/manSeeOnChats.png"
import {FlexWapper} from "../../../components/FlexWapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {ButtonMessage} from "../../../components/button/button";
import {Icon} from "../../../components/icon/Icon";

export const Contacts = () => {
    return (
        <ContactsSection>
            <Container>
                <ContactTitle>Contact Me</ContactTitle>
                <BlockContacts>
                    <FlexWapper gap={"65px"}>
                        <PhotoContacts src={PhotoChat}/>
                        <BlockInputs>
                            <InputEmail placeholder={"Enter email address"}></InputEmail>
                            <InputEmail placeholder={"Enter message..."} as={"textarea"}></InputEmail>
                            <ButtonMessage>Send Message <Icon IconId={"plane"} height={"30px"} width={"30px"} viewBox={"0 0 30 30"}/></ButtonMessage>
                        </BlockInputs>
                    </FlexWapper>
                </BlockContacts>
            </Container>
        </ContactsSection>
    );
};

const ContactsSection = styled.section`

`
const BlockContacts = styled.div`
`

const BlockInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 43px;
    max-width: 613px;
    width: 100%;
    margin: 30px 0px 0px 0px;
    transform: translateX(10px);
    textarea{
        resize: none;
        height: 158px;
    }
`

const PhotoContacts = styled.img`

`

const InputEmail = styled.input`
    width: 100%;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.46);
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 20px 12px;
    &:focus-visible{
        outline: 1px solid ${Theme.colors.colorTextButton};
    }
    &::placeholder{
        color: ${Theme.colors.coloTextDescriptTech};
    }
`