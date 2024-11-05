import React from 'react';
import { BrowserRouter as Router,  NavLink} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';



const Navbar: React.FC = () => (
    <header className='row sticky-top' id='navbar'>
        <div id="navbar_div" className="container d-flex flex-column py-4">
          <nav className="nav nav-masthead justify-content-evenly float-md-end">
            <NavLink id="homelink" className="nav-link fw-bold py-1 px-0" aria-current="page" to="/">Home</NavLink>
            <NavLink id="resumelink" className="nav-link fw-bold py-1 px-0" to="/resume">Resume</NavLink>
            <NavLink id="contactlink" className="nav-link fw-bold py-1 px-0" to="mailto:etleyden@gmail.com">Contact</NavLink>
          </nav>
        </div>
      </header>
);


export default Navbar;