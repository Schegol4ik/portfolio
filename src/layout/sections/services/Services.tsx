import React from 'react';
import {Title} from "../../../components/title/Title";
import {CardServices} from "../../../components/card_services/CardServices";
import styled from "styled-components";
import {Wrapper} from "../../../components/Wrapper";

export const Services = () => {

    const ServicesArr = [
        {
            spriteId: "ruler",
            title: "UI & UX DESIGNING",
            text: "I design beautiful web iterfaces with Figma and Adove XD"
        },
        {
            spriteId: "code",
            title: "WEB DEVELOPMENT",
            text: "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS"
        },
        {
            spriteId: "android",
            title: "MOBILE DEVELOPMENT",
            text: "I am an expert mobile developer. I have experience using Flutter and React Native."
        },
        {
            spriteId: "git",
            title: "VERSION CONTROL",
            text: "I can use version control systems well, and Git & Mecurial are my go-to tool."
        },
        {
            spriteId: "js",
            title: "NPM AND NODEJS",
            text: "I have core understanding of NPM. I can also develop general purpose applications with NodeJS"
        },
        {
            spriteId: "slider",
            title: "WEB SCRAPING",
            text: "I can collect content and data from the internet then manipulate and analyze as needed."
        }
    ]


    return (
        <div>
            <Title title="The services i offer:"/>
            <Wrapper wrap="wrap" justify="center">
                {ServicesArr.map(({spriteId,title,text}) => <CardServices key={title}
                    title={title}
                    spriteId={spriteId}
                    text={text}/>)}
            </Wrapper>
        </div>
    );
};

const ServicesStyle = styled.div`
display: flex;
`