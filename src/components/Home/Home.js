import React from 'react';
import Banner from '../Bannar/Banner';
import Contract from '../contract/Contract';
import Services from '../Services/Services';
import Tourist from '../Tourist/Tours';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Tourist/>
            <div className="container ">
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img className="img-fluid" src="https://demo.web3canvas.com/themeforest/medenin/images/play-img.png" alt="" />
                </div>
                <div className="col-lg-6 col-md-12 mt-5">
                    <div className="mt-5">
                    <small className="text-primary d">Who we are -----</small>
                    <h1 className="py-3">We Have Specail Hotel Services </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                    <strong>Subscribe to our Newsletter</strong><br />
                    <input type="text" placeholder="Enter Your Opinion" className="rounded mt-3 py-2 px-4" />
                    <label className="bg-primary rounded" htmlFor=""></label>
                    </div>
                </div>
            </div>
                </div>
            <Contract></Contract>
        </div>
    );
};

export default Home;