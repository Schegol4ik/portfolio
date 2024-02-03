import React from 'react';
import styled from "styled-components";
import {Wrapper} from "../../../components/Wrapper";
import {Title} from "../../../components/title/Title";
import {Icon} from "../../../components/icon/Icon";
import {Form} from "../../../components/form/Form";

export const Connect = () => {

    const iconArr = ["facebook", "inst", "dribble", "sms"]

    return (
        <Wrapper justify="space-around">
            <ConnectStyle>
                <Title title="Connect with me:"/>
                <p>Satisfied with me? Please contact me</p>
                {iconArr.map(item => <Icon idSprite={item}/>)}
            </ConnectStyle>
            <Form/>
        </Wrapper>
    );
};

const ConnectStyle = styled.div`

`