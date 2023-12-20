import React, {useEffect, useState} from 'react';
import './styles/PlayerScreen.css';
import {useLocation} from "react-router-dom";
import api from "../music";
import SongBody from "../components/SongBody";
import QueueBody from "../components/QueueBody";
import Player from "../components/Player";
import Recomendations from "../components/Recomendations";

const PlayerScreen = () => {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [playing, setPlaying] = useState({});
    const [index, setIndex] = useState(0);
    /*console.log(location);*/

    useEffect(() => {
        if (location.state) {
            api.get("/playlists/" + location.state?.id + "/tracks").then(res => {
                setTracks(res.data.items);
                setPlaying(res.data.items[0].track);
                /*console.log(res)*/
            })
        }
    }, [location.state]);

    /*console.log(tracks);*/

    useEffect(() => {
        if (tracks.length > 0) {
            setPlaying(tracks[index].track);
        }
    }, [index, tracks]);

    return (
        <div className="main-screen flex">
            <div className="left-body">
                <SongBody album={playing.album}/>
                <QueueBody tracks={tracks} setIndex={setIndex}/>
            </div>
            <div className="right-body">
                <Player playing={playing} index={index} setIndex={setIndex} total={tracks}/>
                <Recomendations artist={playing?.album?.artists[0]?.id}/>
            </div>
        </div>
    );
};

export default PlayerScreen;