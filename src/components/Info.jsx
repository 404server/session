import React from 'react';
import './styles/Info.css';

const Info = ({info}) => {
    /*console.log(info)*/
    const artists = [];
    info?.artists?.forEach((artist) => {
        artists.push(artist.name);
    })
    return (
        <div className="album-info">
            <div className="name-container">
                <div className="animation">
                    <p>{info?.name + ": " + artists.join(", ")}</p>
                </div>
            </div>
            <div className="info">
                <p>{info?.name + " is " + info?.album_type + " album with " + info?.total_tracks + " track(s) "}</p>
            </div>
            <div className="date">
                <p>{"Release Date: " + info?.release_date}</p>
            </div>
        </div>
    );
};

export default Info;