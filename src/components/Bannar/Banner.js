import React from 'react';
import { Link } from 'react-router-dom';
import ('./Banner.css')

const Banner = () => {
    return (
        <div className="bannar container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="img-fluid" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/slider-1-background-3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <p className="text-center ">Life Changing</p>
        <h5 className="fw-bold  text-dark fs-1">YOUR <span className="text-primary">JOURNEY</span> BEGINS</h5>
        <p className="text-light fw-bold fs-3">A journey of a 1000 miles start with a single step import the demo content with 1 click create ahead-turning website for your travrels agency</p>
       <Link to="/booking">
           <btn className="btn btn-dark text-light fw-bold px-3 py-2">Booking Now <i className="fas fa-arrow-to-right ms-2 mt-2"></i></btn>
       </Link>
        <p>Enjoy Your Travelling</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/coming-soon-background-img.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <p className="text-center ">Life Changing</p>
        <h5 className="fw-bold  text-dark fs-1">YOUR <span className="text-primary">JOURNEY</span> BEGINS</h5>
        <p className="text-warning fw-bold fs-3">A journey of a 1000 miles start with a single step import the demo content with 1 click create ahead-turning website for your travrels agency</p>
        <Link to="/booking">
           <btn className="btn btn-dark text-light fw-bold px-3 py-2">Booking Now <i className="fas fa-arrow-to-right ms-2 mt-2"></i></btn>
       </Link>
        <p>Enjoy Your Travelling</p>
</div>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="https://kodeforest.com/wp-demo/travel/wide/wp-content/uploads/revslider/homeslider/111.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <p className="text-center ">Life Changing</p>
        <h5 className="fw-bold  text-dark fs-1">YOUR <span className="text-primary">JOURNEY</span> BEGINS</h5>
        <p className="text-warning fw-bold fs-3">A journey of a 1000 miles start with a single step import the demo content with 1 click create ahead-turning website for your travrels agency</p>
        <Link to="/booking">
           <btn className="btn btn-dark text-light fw-bold px-3 py-2">Booking Now <i className="fas fa-arrow-to-right ms-2 mt-2"></i></btn>
       </Link>
        <p>Enjoy Your Travelling</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;