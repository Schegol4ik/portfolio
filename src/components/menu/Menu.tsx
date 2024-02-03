import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About me</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    max-width: 450px;

    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        color: #ffff;

        a {
            color: #fff;
            font-family: Poppins, sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            text-decoration: none;
            :hover {
                color: #7562E0;
            }
        }
    }


`