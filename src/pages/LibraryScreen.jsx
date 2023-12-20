import React, {useEffect, useState} from 'react';
import api from "../music";
import './styles/LibraryScreen.css';
import {IconContext} from "react-icons";
import {HiMiniPlayCircle} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";

const LibraryScreen = () => {
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        api.get('me/playlists').then(function (res) {
            setPlaylists(res.data.items);
        });
    }, []);

    const nav = useNavigate();
    const playPlaylist = (id) => {
        nav("/player", {state: {id: id}});
    }


    return (
        <div className="main-screen">
            <div className="library">
                {playlists?.map((playlist) =>
                    <div className="playlist" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
                        <img loading="lazy" src={playlist.images[0].url} alt="plaulist img" className="playlist-card"/>
                        <p className="title">{playlist.name}</p>
                        <p className="desc">{playlist.tracks.total} Songs</p>
                        <div className="playlist-play">
                            <IconContext.Provider value={{size: "50px", color: "rgb(3,6,102)"}}>
                                <HiMiniPlayCircle/>
                            </IconContext.Provider>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LibraryScreen;