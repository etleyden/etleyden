import React from 'react';
import {Helmet} from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';

const HomePage: React.FC = () => (
    <div id="landing" className="row flex-grow-1">
        <Helmet>
            <title>Home - Ethan Leyden</title>
            <style>
                {`body {
                    color: white;
                    background-image: url("../../assets/landscape_ethan.jpg");
                    background-position: center;
                    height: 100vh;
                }`}
            </style>
        </Helmet>
        <div id="main_hero" className="m-auto">
            <p id="name-banner" className="">Ethan Leyden</p>
        </div>
    </div>
);

export default HomePage;