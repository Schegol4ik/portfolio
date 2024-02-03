import React from 'react';
import styled from "styled-components";

type TitleType = {
    title: string
}
export const Title = ({title}: TitleType) => {
    return (
        <TitleStyle>
            {title}
        </TitleStyle>
    );
};

const TitleStyle = styled.h2`
    color: rgb(117, 98, 224);
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    text-align: left;
`