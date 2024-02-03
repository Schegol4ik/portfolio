import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconTypes = {
    idSprite: string
    widthSprite?: string
    heightSprite?: string
    viewBoxSprite?: string
}
export const Icon = ({idSprite, widthSprite, heightSprite, viewBoxSprite}: IconTypes) => {
    return (
        <svg width={widthSprite || "50"} height={heightSprite || "50"} viewBox={viewBoxSprite || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg" color='white'>
            <use xlinkHref={`${iconsSprite}#${idSprite}`}/>
        </svg>
    );
};

