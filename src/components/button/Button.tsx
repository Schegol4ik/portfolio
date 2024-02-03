import React from 'react';
import styled, {css} from "styled-components";
import {Icon} from "../icon/Icon";

type ButtonTypes = {
    title?: string
    typeBtn: "outline" | "total"
    svgName?: string
    width?: string
    height?: string
}
export const Button = ({title, typeBtn, svgName, width, height}: ButtonTypes) => {
    return (
        <MyBtn typeBtn={typeBtn} width={width} height={height}>
            {title} {svgName && <Icon idSprite={svgName} heightSprite="20" widthSprite="20" viewBoxSprite="0 -4 23 23"/>}
        </MyBtn>
    );
};

const MyBtn = styled.button<ButtonTypes>`
    border: none;
    text-align: center;
    border-radius: 8px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    width: ${({width}) => width || "160px"};
    height: ${({height}) => height || "48px"};

    ${({typeBtn}) => typeBtn === "outline" && css<ButtonTypes>`
        border: 2px solid #7562E0;
        background-color: transparent;
        gap: 5px;

    `}
    ${({typeBtn}) => typeBtn === "total" && css<ButtonTypes>`
        background-color: #7562E0;
        gap: 6px;
    `}
`
