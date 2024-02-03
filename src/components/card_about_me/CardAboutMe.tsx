import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Wrapper} from "../Wrapper";

type CardAboutMeStyleType = {
    idSprite: string
    text: string
}
export const CardAboutMe = ({text, idSprite}: CardAboutMeStyleType) => {
    return (
        <CardAboutMeStyle>
            <AboutSkills>
                <Wrapper direction="column" justify="flex-end">
                    <Icon idSprite={idSprite} widthSprite="60" heightSprite="60" viewBoxSprite="0 0 62 62"/>
                    <p>{text}</p>
                </Wrapper>
            </AboutSkills>
        </CardAboutMeStyle>
    );
};

const CardAboutMeStyle = styled.div`
    width: 256px;
    height: 254px;
    background-color: rgb(189, 189, 189);
    margin-left: 17px;
`

const  AboutSkills = styled.div`
    height: 200px;
    display: flex;

`

