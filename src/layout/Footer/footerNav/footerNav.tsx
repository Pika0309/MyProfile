import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

type FooterNavPropsType = {
    IconId: string
}

export const FooterNav = (props: FooterNavPropsType) => {
    return (
        <BlockNav>
            <Icon IconId={props.IconId} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
        </BlockNav>
    );
};

const BlockNav = styled.div`
    
`