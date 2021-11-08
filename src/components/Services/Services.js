import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import ('./Services.css')

const Services = () => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/customer')
        .then(res =>res.json())
        .then(data =>setCards(data))
    },[])
    return (
    <div className="services ">
          <div className="container">
            <div className="mt-5">
            <small className="ps-5 text-primary ">our services</small>
            <h1 className="fw-bold ps-5">High Quality Services for You</h1>
            </div>
            <div className="card-container mt-5 mb-5 ">
                {/* <div className="row row-cols-md-1 row-cols-lg-3 g-4 "> */}
                    {
                        cards.map(card =><Card key={card.id} card={card}></Card>)
                    }
                
                {/* </div> */}
             </div>
         </div>
     </div>
    );
};

export default Services;