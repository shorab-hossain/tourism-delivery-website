import React from 'react';
import ('./Contract.css')

const Contract = () => {
    return (
        <div className="col-lg-12 row mt-5">
            <div className="col-lg-6 p-5 text-light" style={{background:'#28a745'}}>
                <h1 className="p-4">Why Choose Your Travels Tour?</h1>
                <div className="d-flex">
                <div className="p-4">
                    <strong><i className="fas fa-check me-2 bg-dark p-2 rounded"></i>Advanced Tour</strong>
                    <p>Lorem ipsum dolor sit</p>
                </div>
                <div  className="p-4">
                    <strong><i className="fas fa-check me-2 bg-dark p-2 rounded"></i>Online sevices</strong>
                    <p>Lorem ipsum dolor sit</p>
                </div>
                </div>
                <div className="d-flex">
                <div className="p-4">
                    <strong><i className="fas fa-check me-2 bg-dark p-2 rounded"></i>Tour & Travels</strong>
                    <p>Lorem ipsum dolor sit</p>
                </div>
                <div className="p-4">
                    <strong><i className="fas fa-check me-2 bg-dark p-2 rounded"></i>Place</strong>
                    <p>Lorem ipsum dolor sit</p>
                </div>
                </div>
                <button className="btn  text-light px-4 shadow mt-3 ps-4 py-2 fw-bold" style={{background:"#343a40"}}>Booking Now</button>
            </div>
            <div className="col-lg-6 p-5 text-light" style={{background:'#6610f2'}}>
                <h1> Contact Us.</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam</p>
               <div>
               <i className="fas fa-phone-volume me-3 fs-2 p-3 mt-5" style={{background:'#3858af47'}}></i><strong>Call us now</strong>:+123 456 7890
               </div>
               <div className="mt-4">
               <i className="fas fa-envelope-open-text me-3 fs-2 p-3 "></i> <strong>Mail us</strong>:info@medenin.com
               </div>
            </div>
        </div>
    );
};

export default Contract;