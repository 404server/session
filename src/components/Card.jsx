import React from 'react';
import './styles/Card.css';


const Card = ({title,number,img}) => {
    return (
        <div className="card-body flex">
            <img src={img} alt={title} className="card-img"/>
            <div className="card-right flex">
                <p className="card-title">{title}</p>
                <p className="card-desc">{number}</p>
            </div>
        </div>
    );
};

export default Card;