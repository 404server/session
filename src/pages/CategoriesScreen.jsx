import React, {useEffect, useState} from 'react';
import api from "../music";
import './styles/CategoryScreen.css';
import {useNavigate} from "react-router-dom";

const CategoriesScreen = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        api.get('/browse/categories').then(res => {
            setCategories(res?.data?.categories?.items);
            console.log(res.data);
        }).catch(err => {
            console.error('Error fetching categories:', err);
        });
    }, []);

    const nav = useNavigate();
    const playPlaylist = (id) => {
        nav("/player", {state: {id: id}});
    }

    const getPlaylists = (id) => {
        api.get(`/browse/categories/${id}/playlists`).then(res => {
            var url = res?.data?.playlists?.items[0]?.href;
            var parts = url.split('/');
            var playlistId = parts[parts.length - 1];
            playPlaylist(playlistId);
        }).catch(err => {
            console.error('Error fetching categories:', err);
        });

    }

    return (
        <div className="category-screen">
            {categories.map((category) => (
                <div className="category-card" key={category.id} onClick={() => {
                    getPlaylists(category.id);
                }}
                >
                    <img src={category?.icons[0]?.url} alt={category?.name} className="category-image"/>
                    <p className="category-name">{category?.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoriesScreen;
