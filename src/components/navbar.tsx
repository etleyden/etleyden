import React from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

const Navbar: React.FC = () => (
    <header className='row sticky-top' id='navbar'>
        <div id="navbar_div" className="container d-flex flex-column py-4">
          <nav className="nav nav-masthead justify-content-evenly float-md-end">
            <Link className="nav-link fw-bold py-1 px-0" aria-current="page" to="/">Home</Link>
            <Link className="nav-link fw-bold py-1 px-0" to="/resume">Resume</Link>
            <Link className="nav-link fw-bold py-1 px-0" to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
);


export default Navbar;