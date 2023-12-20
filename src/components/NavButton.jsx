import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './styles/NavButton.css'
import {IconContext} from "react-icons";

const NavButton = ({icon, to, title}) => {
    const location = useLocation();

    let isActive = location.pathname === to;

    let classBtn = isActive ? "btn active" : "btn";
    return (
        <Link to={to}>
            <div className={classBtn}>
                <IconContext.Provider value={{size: '24px', className: "icon"}}>
                    {icon}
                    <p className="btn-title">{title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    );
};

export default NavButton;