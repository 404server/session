import React, {useEffect, useState} from 'react';

import './styles/HomeScreen.css';
import Login from "../components/auth/Login";
import NavigationBar from "../components/NavigationBar";
import {Route, Routes} from "react-router-dom";
import LibraryScreen from "./LibraryScreen";
import CategoriesScreen from "./CategoriesScreen";
import SearchScreen from "./SearchScreen";
import PlayerScreen from "./PlayerScreen";
import TrendingScreen from "./TrendingScreen";
import SettingsScreen from "./SettingsScreen";
import NotFoundScreen from "./NotFoundScreen";
import {setClientToken} from "../music";

const HomeScreen = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const tkn = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", tkn);
            setToken(tkn);
            setClientToken(tkn);
        } else {
            setToken(token);
            setClientToken(token);
        }
    }, []);
    return !token ? (
        <Login/>
    ) : (
        <div className="main">
            <NavigationBar/>
            <Routes>
                <Route path="/login" component={Login}/>
                <Route path="/" element={<LibraryScreen/>}/>
                <Route path="/categories" element={<CategoriesScreen/>}/>
                <Route path="/search" element={<SearchScreen/>}/>
                <Route path="/player" element={<PlayerScreen/>}/>
                <Route path="/trending" element={<TrendingScreen/>}/>
                <Route path="/settings" element={<SettingsScreen/>}/>
                <Route path="/*" element={<NotFoundScreen/>}/>
            </Routes>
        </div>
    );
};

export default HomeScreen;