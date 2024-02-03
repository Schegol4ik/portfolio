import React from 'react';
import {Wrapper} from "../../../components/Wrapper";
import styled from "styled-components";
import {CardAboutMe} from "../../../components/card_about_me/CardAboutMe";
import {Title} from "../../../components/title/Title";

export const AboutMe = () => {

    const CardsArr = [
        {
            idSprite: "ruler",
            text: "UI & UX DESIGNING"
        },
        {
            idSprite: "code",
            text: "WEB DEVELOPMENT"
        },
        {
            idSprite: "android",
            text: "MOBILE DEVELOPMENT"
        },
        {
            idSprite: "python",
            text: "WEB SCRAPING WITH PYTHON"
        },
    ]

    return (
        <AboutMeStyle>
            <Title title="About me:"/>
            <p>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I
                jhave honed my skills in Web Development and advance i have core understanding of advance UI design
                principles.
                Here are the major skiills i have. </p>
            <Wrapper>
                <span>5+</span>
                <p>Years of experience. Specialised in building apps, while ensuring a seamless
                    web experience for end users.</p>
            </Wrapper>
            <Wrapper justify="center">
                {CardsArr.map(({idSprite, text}) => <CardAboutMe idSprite={idSprite} text={text} key={text}/>)}
            </Wrapper>
        </AboutMeStyle>
    );
};

const AboutMeStyle = styled.div`
    color: #fff;
`