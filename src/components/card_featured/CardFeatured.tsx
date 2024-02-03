import React from 'react';
import styled from "styled-components";
import {Wrapper} from "../Wrapper";
import {Button} from "../button/Button";

type CardFeaturedType = {
    imgSrc: string
    title: string
    text: string
}
export const CardFeatured = ({imgSrc, text, title}: CardFeaturedType) => {
    return (
        <CardFeaturedStyle>
            <Wrapper direction="column" >
                <PhotoFeatured src={imgSrc} alt={title}/>
                <span>{title}</span>
                <p>{text}</p>
                <Wrapper>
                    <Button typeBtn="total" title="View Live" width="145px" height="43px"/>
                    <Button typeBtn="outline" title="Github Repo" width="144px" height="43px"/>
                </Wrapper>
            </Wrapper>
        </CardFeaturedStyle>
    );
};

const CardFeaturedStyle = styled.div`
    display: flex;
    margin-left: 17px;
    width: 343px;
    height: 417px;
    color: #fff;
    border: 1px solid red ;
`
const PhotoFeatured = styled.img`
    width: 311px;
    height: 173px;
    border-radius: 8px;
    background: linear-gradient(180.00deg, rgba(24, 24, 36, 0.25),rgba(117, 98, 224, 0.5) 100%);
`
