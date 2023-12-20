import React from 'react';
import './styles/Animation.css'

const Animation = ({isActive}) => {

    const activeClass = isActive ? "box active" : "box";



    return (
        <div className="anim-container flex">
            <div className={`${activeClass} box1`}></div>
            <div className={`${activeClass} box2`}></div>
            <div className={`${activeClass} box3`}></div>
            <div className={`${activeClass} box4`}></div>
            <div className={`${activeClass} box5`}></div>
            <div className={`${activeClass} box6`}></div>
            <div className={`${activeClass} box6`}></div>
            <div className={`${activeClass} box5`}></div>
            <div className={`${activeClass} box4`}></div>
            <div className={`${activeClass} box3`}></div>
            <div className={`${activeClass} box2`}></div>
            <div className={`${activeClass} box1`}></div>
        </div>
    );
};

export default Animation;