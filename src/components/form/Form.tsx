import React from 'react';
import styled from "styled-components";
import {Wrapper} from "../Wrapper";
import {Button} from "../button/Button";

export const Form = () => {
    return (
        <FormStyle>
            <Wrapper direction="column">
                <h3>Contact me, let’s make magic together</h3>
                <Input/>
                <Input/>
                <TextArea/>
                <Button typeBtn="total" title="Send" width="174px" height="50px"/>
            </Wrapper>
        </FormStyle>
    );
};

const FormStyle = styled.div``

const Input = styled.input``

const TextArea = styled.textarea``