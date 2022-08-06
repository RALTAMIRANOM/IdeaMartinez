import React from 'react';

const MainImage = ({src}) => {
    
    return (
        <img key={src.id_img} src={src.imglist} alt={src} width="350" height="350"/>

    )
}

export default MainImage