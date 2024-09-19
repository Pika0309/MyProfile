import React from 'react';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {FlexWapper} from "../../components/FlexWapper";
import {Logo} from "../../components/logo/logo";
import styled from "styled-components";
import {Container} from "../../components/Container";


export const MenuItems = [
    "Skills", "Projects", "Contact me"
]

export const Header = () => {
    return (
        <StyleHeader>
            <Container>
            <BlockHeader>
            <FlexWapper justify={"space-between"}>
                <Logo/>
                <HeaderMenu menuItems={MenuItems}/>
            </FlexWapper>
            </BlockHeader>
            </Container>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    background-color: #ffffff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99999;
`
const BlockHeader = styled.div`
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.45);
    padding: 0px 100px;
`