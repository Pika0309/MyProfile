import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import IconHover from "../../../assets/image/gearsRed.svg"


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <Menu>
            <List>
                {props.menuItems.map((item, index) =>
                    <ListItem key={index}>
                        <Link href="/#"><ImageHover src={IconHover}/>{item}</Link>
                    </ListItem>
                )}
            </List>
        </Menu>
    );
};

const Menu = styled.nav`

`

const List = styled.ul`
    display: flex;
    gap: 20px;
`

const ListItem = styled.li`

`

const ImageHover = styled.img`
    visibility: hidden;
`

const Link = styled.a`
    color: ${Theme.colors.colorTextTechStack};
    display: flex;
    align-items: center;

    &:hover {
        color: ${Theme.colors.colorTextTitle};

        ${ImageHover} {
            visibility: visible;
        }
    }
`