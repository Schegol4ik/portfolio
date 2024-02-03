import styled from "styled-components";

type WrapperType = {
    justify?: string
    align?: string
    direction?: string
    wrap?: string
}

export const Wrapper = styled.div<WrapperType>`
    display: flex;
    justify-content: ;
    flex-direction: ${({direction}) => direction || "row"};
    justify-content: ${({justify}) => justify || "flex-start"};
    align-items: ${({align}) => align || "stretch"};
    flex-wrap: ${({wrap}) => wrap || "nowrpap"};
`