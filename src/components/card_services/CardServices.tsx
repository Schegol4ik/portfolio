import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {Wrapper} from "../Wrapper";

type CardServicesType = {
    title: string
    spriteId: string
    text: string
}
export const CardServices = ({spriteId, text, title}: CardServicesType) => {
    return (
        <CardServicesStyle>
            <TitleCardStyle>
                <Wrapper justify="center" align="center" direction="column">
                    <Icon idSprite={spriteId} heightSprite="50" widthSprite="50" viewBoxSprite="0 0 58 58"/>
                    <span>{title}</span>
                    <p>{text}</p>
                </Wrapper>
            </TitleCardStyle>
        </CardServicesStyle>
    );
};

const CardServicesStyle = styled.div`
    width: 339px;
    min-height: 338px;
    border: 1px solid red;
    color: #fff;
    margin: 16px 22px;
`

const TitleCardStyle = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
`