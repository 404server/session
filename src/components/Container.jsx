import React from 'react';
import './styles/Container.css';
import Card from "./Card";
import {IconContext} from "react-icons";
import {FcNext} from "react-icons/fc";

const Container = ({like, featured, release, name}) => {
    return (
        <div className="body">
            <p className="container-title">{name}</p>
            {
                like ? like.map((artist) => (
                    <Card title={artist?.name} number={artist?.followers?.total + " followers"} img={artist?.images[2]?.url}/>
                )) : featured ? featured.map((feature) => (
                    <Card title={feature?.name} number={feature?.tracks?.total + " songs"} img={feature?.images[0]?.url}/>
                )) : release ? release.map((real) => (
                    <Card title={real?.name} number={real?.artists[0]?.name} img={real?.images[2]?.url}/>
                )) : null}
            <div className="next-fade">
                <div className="next-btn">
                    <IconContext.Provider value={{size: "24px", color: ""}}>
                        <FcNext />

                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default Container;