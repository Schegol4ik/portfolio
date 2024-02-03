import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {Wrapper} from "../../../components/Wrapper";
import proj1 from '../../../assets/images/proj1.jpeg'
import proj2 from '../../../assets/images/proj2.jpeg'
import proj3 from '../../../assets/images/proj3.jpeg'
import {CardFeatured} from "../../../components/card_featured/CardFeatured";


export const Featured = () => {

    const featuredArray = [
        {
            imgSrc: proj1,
            title: "TWINDER",
            text: "A live Geolocation app for finding tweets and twitter users around you."
        },
        {
            imgSrc: proj2,
            title: "LIVENTS",
            text: "A video streaming app with live Geolocation, for streaming events."
        },
        {
            imgSrc: proj3,
            title: "MOOVE",
            text: "Mobile app for booking instant pickup & dropoff accross major cities."
        },
    ]
    return (
        <FeaturedStyle>
            <Title title="Featured projects:"/>
            <p>I have worked on many projects over the course of being a Web Developer, here are a few of my live,
                real-world projects</p>
            <Wrapper>
                {featuredArray.map(({imgSrc, text, title}) => <CardFeatured
                    imgSrc={imgSrc}
                    title={title}
                    text={text}/>)}
            </Wrapper>
        </FeaturedStyle>
    );
};

const FeaturedStyle = styled.div`
`
