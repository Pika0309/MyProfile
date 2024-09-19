import React from 'react';
import styled from "styled-components";


type FlexWrapperProps = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
    gap?: string
}

export const FlexWapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: ${props => props.align || "stretch"};
    justify-content: ${props => props.justify || "flex-start"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0px"};
`

