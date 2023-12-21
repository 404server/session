import React, { useState } from 'react';
import './styles/Search.css';
import api from "../music";
import { useNavigate } from "react-router-dom";

const SearchScreen = () => {
    const [search, setSearch] = useState("");
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const fetchArtistId = async () => {
        try {
            const response = await api.get(`search?q=${encodeURIComponent(search)}&type=artist`);
            const artistId = response?.data?.artists?.items[0]?.id;
            console.log(artistId);
            return artistId;
        } catch (error) {
            console.error("Error fetching artist data: ", error);
            setError("Failed to fetch artist data.");
        }
    };

    const fetchAlbums = async (artistId) => {
        if (!artistId) return;
        try {
            const response = await api.get(`artists/${artistId}/albums`);
            console.log(response?.data);
            setAlbums(response?.data?.items);
        } catch (error) {
            console.error("Error fetching albums data: ", error);
            setError("Failed to fetch albums data.");
        }
    };

    const handleSearch = async () => {
        console.log("Search for: ", search);
        const artistId = await fetchArtistId();
        await fetchAlbums(artistId);
    };

    const playPlaylist = (id) => {
        navigate("/player", { state: { id } });
    };

    return (
        <div className="search-screen">
            <div className="search-container">
                <h1>Find Your Favorite Artist</h1>
                {error && <p className="error-message">{error}</p>}
                <div className="search-bar">
                    <input
                        className="search-input"
                        placeholder="Search Artists"
                        type="input"
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                handleSearch();
                            }
                        }}
                        onChange={event => setSearch(event.target.value)}
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <div className="albums-container">
                {albums.map((album) => (
                    <div className="card" key={album?.id} onClick={() => playPlaylist(album?.id)}>
                        <img src={album?.images[0]?.url} alt="Album Art" className="card-img"/>
                        <div className="card-body">
                            <h2 className="card-title">{album?.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchScreen;
