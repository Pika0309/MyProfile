import React from 'react';
import IconsSprite from "../../assets/image/circles.svg"

type IconPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "120"} height={props.height || "76"} viewBox={props.viewBox || "0 0 120 76"}>
            <use xlinkHref={`${IconsSprite}#${props.IconId}`}/>
        </svg>
    );
};