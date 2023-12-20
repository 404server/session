import React from 'react';
import './styles/ProgressBar.css';


const Bar = ({color, width, size, percentage}) => {
    const radius = size / 2 - 10;
    const circ = 2 * Math.PI * radius - 20;
    const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

    return (
        <circle
            r={radius}
            cx="50%"
            cy="50%"
            fill="transparent"
            stroke={strokePct !== circ ? color : ""}
            strokeWidth={width}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap="round"
        ></circle>
    );
}

const ProgressBar = ({isActive, img, color, percentage, size}) => {
    return (
        <div className="progress-bar">
            <svg width={size} height={size}>
                <g>
                    <Bar width="0.4rem" color="grey" size={size}/>
                    <Bar width="0.6rem" color={color} size={size} percentage={percentage}/>
                </g>
                <defs>
                    <clipPath id="innerBar">
                        <circle cx="50%" cy="50%" r={(size / 2) - 20} fill="black"/>
                    </clipPath>
                </defs>
                <image className={isActive ? "active" : ""} x={20} y={20} width={2 * ((size / 2) - 20)}
                       height={2 * ((size / 2) - 20)} href={img} clipPath="url(#innerBar)"/>
            </svg>
        </div>
    );
};

export default ProgressBar;