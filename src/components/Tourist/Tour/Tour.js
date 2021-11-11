import React from 'react';
import { Link } from 'react-router-dom';
import ('./Tour.css')


const Tour = (props) => {
    const {img,country,price,description,_id} = props.tour;
    return (
        <div className="container text-center">
             <div className="card shadow">
            <img  src={img} className="card-img-top img-fluid top-0 tourCard" alt="..."/>
            <div className="card-body">
                <h4>{country}</h4>
                <h5>{price}</h5>
                <p className="card-text">{description}</p>
                <Link to={`/booking/${_id}`}>
                <button className="btn btn-primary px-3 py-2">Book Now<i className="fas fa-shopping-cart ms-2"></i></button> 
                </Link>
            </div>
            </div> 
        </div>
    );
};

export default Tour;