import React, {useEffect, useState} from 'react';
import './styles/NavigationBar.css'
import NavButton from "./NavButton";

import {BiCog, BiHeart, BiLibrary, BiPlay} from "react-icons/bi";
import {SiFireship} from "react-icons/si";
import {BsPeopleFill} from "react-icons/bs";
import api from "../music";
import {useTheme} from "./Theme";

const NavigationBar = () => {
    const { theme } = useTheme();

    const [image, setImage] = useState(`${process.env.PUBLIC_URL}/img/user.jpg`);
    useEffect(() => {
        api.get("me").then(res => {
            setImage(res.data.images[0].url)})
    }, []);

    return (
        <div className="navigation" style={{
            backgroundColor: theme.backgroundColor,
            borderBottom: `2px solid ${theme.borderColor}`,
            boxShadow: `0 10px 10px 0 ${theme.boxShadowColor}`
        }}>
            <img className="user-profile" src={image} alt="Your Alt Text"/>
            <div className="nav-buttons">
                <NavButton title="Favourite" to="/favourite" icon={<BiHeart/>}/>
                <NavButton title="Categories" to="/artists" icon={<BsPeopleFill/>}/>
                <NavButton title="Player" to="/player" icon={<BiPlay/>}/>
                <NavButton title="Trending" to="/trending" icon={<SiFireship/>}/>
                <NavButton title="Library" to="/" icon={<BiLibrary/>}/>
            </div>
            <NavButton name="Settings" to="/settings" icon={<BiCog/>}/>
        </div>
    );
};

export default NavigationBar;
