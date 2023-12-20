import React from 'react';
import './styles/SongBody.css';
import Info from "./Info";
import AlbumImg from "./AlbumImg";

const SongBody = ({album}) => {
    /*console.log(album);*/
    return (
        <div className="container flex">
            <AlbumImg url={album?.images[0].url}/>
            <Info info={album}/>
        </div>
    );
};

export default SongBody;