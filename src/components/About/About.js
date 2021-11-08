import React from 'react';
import('./About.css')

const About = () => {
    return (
        <div className="about-bannar  col-lg-12 col-md-12">
            <div className="d-flex container">
            <div className="col-lg-6 col-md-12 col-sm-12">
            </div>
            <div className="col-lg-6 col-md-12 ms-4 content p-4 text-light col-sm-12">
                <h1 className="mb-4">We Believe in a Healthier You</h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <p className="mb-4">Adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <button className="rounded btn text-light py-2 px-3" style={{background:'#20c997'}}><strong>Get Consultant<i className=" ms-2 fas fa-arrow-to-right"></i></strong></button>
            </div>
            </div>
        </div>
    );
};

export default About;