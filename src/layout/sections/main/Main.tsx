import React from 'react';
import {Button} from "../../../components/button/Button";
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {Wrapper} from "../../../components/Wrapper";

export const Main = () => {
    return (
        <Wrapper justify="space-around">
                <Wrapper direction="column" justify="center">
                    <MainStyle>
                        <span>Hello, i’m</span>
                        <h2>Jayjay D. Dinero</h2>
                        <h1>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences
                            for end-users.</h1>
                        <div>
                            <Button title='About me' typeBtn="total" svgName="users"/>
                            <Button title='Projects ' typeBtn="outline" svgName="eye"/>
                        </div>
                    </MainStyle>
                </Wrapper>
            <Photo src={photo}/>

        </Wrapper>
    );
};

const Photo = styled.img`
    width: 444px;
    height: 444px;
    object-fit: cover;
`

const MainStyle = styled.div`
    span {
        color: #FFF;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    h2 {
        color: #F5F5F5;
        font-size: 52px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    h1 {
        color: #FFF;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        max-width: 435px;
    }
`