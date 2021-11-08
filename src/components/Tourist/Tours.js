import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tour from './Tour/Tour';

const Tours = () => {
    const [tours,setTours] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/tour')
        .then(res =>res.json())
        .then(data =>setTours(data))
    },[])
    return (
        <div className="container ">
        <p className="text-center mt-5 text-primary">All Tour Pakage</p>
        <h1 className="text-center">Booking Now</h1>
        <div className="card-container mb-5 mt-5 ">
            {
                tours.map(tour =><Tour key={tour.id} tour={tour}></Tour>)
            }
        </div>
    </div>
    );
};

export default Tours;