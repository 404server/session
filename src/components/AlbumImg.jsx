import React from 'react';
import './styles/AlbumImg.css'

const AlbumImg = ({url}) => {
    /*console.log(url)*/
    return (
        <div className="img-container flex">
            <img src={url} alt="album"/>
            <div className="effect">
                <img src={url} alt="album" className="effect"/>
            </div>
        </div>


    );
};

export default AlbumImg;