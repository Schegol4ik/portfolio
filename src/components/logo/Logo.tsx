import React from 'react';
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
            <a href="">Jayjay Dinero</a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
    a {
        color: #7562E0;
        font-family: Poppins,sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }
`