import React, { useEffect, useState } from 'react';
import api from "../music";
import { useNavigate } from "react-router-dom";
import './styles/Trending.css';

const PlaylistCard = ({ playlist, onPlay }) => (
    <div className="playlist-card" onClick={() => onPlay(playlist.id)}>
        <img src={playlist.images[0].url} alt={`${playlist.name} cover`} className="playlist-image"/>
        <p className="playlist-name">{playlist.name}</p>
    </div>
);

const TrendingScreen = () => {
    const [release, setRelease] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const nav = useNavigate();

    useEffect(() => {
        api.get('/browse/featured-playlists').then(res => {
            setRelease(res.data.playlists.items);
            setLoading(false);
        }).catch(err => {
            console.error('Error fetching categories:', err);
            setError(err);
            setLoading(false);
        });
    }, []);

    const playPlaylist = id => nav("/player", { state: { id } });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading playlists</div>;

    return (
        <div className="trending-screen">
            {release.map(playlist => (
                <PlaylistCard key={playlist.id} playlist={playlist} onPlay={playPlaylist} />
            ))}
        </div>
    );
};

export default TrendingScreen;
