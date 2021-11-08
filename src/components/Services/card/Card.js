import React from 'react';
import { Link } from 'react-router-dom';
import ('./Card.css')

const Card = (props) => {
    const {title,describtion,imgUrl,position} =props.card;
    console.log(props)
    return (
        <div className="col">
            <div className="card h-100 service-card">
                <img className="img-fluid w-100 card-img-top" src={imgUrl} alt="..."/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5 className="card-title text-center bg-secondary fw-bold text-light py-3 px-3">{position}</h5>
                    <p className="card-text">{describtion}</p>
                    <Link to="/contract">
                    <button className="btn px-4 py-2 bg-primary text-light d-flex mx-auto  my-3">Contract Now<i className="fas fa-arrow-to-right ms-2 mt-2"></i></button></Link>
                </div>
             </div>
        </div>
    );
};

export default Card;