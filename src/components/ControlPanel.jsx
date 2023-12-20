import React from 'react';
import {IconContext} from "react-icons";
import {FcNext, FcPrevious} from "react-icons/fc";
import {FiPause, FiPlay} from "react-icons/fi";
import './styles/Control.css';

const ControlPanel = ({play, prev, next, isPlaying}) => {
    /*console.log(isPlaying);*/
    return (
        <IconContext.Provider value={{size: "35px", color: "rebeccapurple"}}>
            <div className="controls flex">
                <div className="action flex" onClick={prev}>
                    <FcPrevious/>
                </div>
                <div className="play flex" onClick={play}>
                    {isPlaying ? <FiPause/> : <FiPlay/>}
                </div>
                <div className="action flex" onClick={next}>
                    <FcNext/>
                </div>
            </div>

        </IconContext.Provider>
    );
};

export default ControlPanel;