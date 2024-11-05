import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

    //<!--<div className="d-flex w-100 h-100 p-3 flex-column"></div>-->
const App: React.FC = () => (
  <div>
    <div id="landing" className="d-flex flex-column container vh-100">
      <header className='row sticky-top' id='navbar'>
        <div id="navbar_div" className="container d-flex flex-column py-4">
          <nav className="nav nav-masthead justify-content-evenly float-md-end">
            <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
            <a className="nav-link fw-bold py-1 px-0" href="#">Features</a>
            <a className="nav-link fw-bold py-1 px-0" href="#">Contact</a>
          </nav>
        </div>
      </header>
      <div className="row flex-grow-1">
        <div id="main_hero" className="m-auto">
          <p id="name-banner" className="">Ethan Leyden</p>
        </div>
      </div>
    </div>

    <main className="vw-100" id="home_main">
      <div id="resume" className="container justify-content-center">
        <div className="row">
          <h1>Profile</h1>
        </div>
        <div className="row py-3">
          <h2>Work experience</h2>
        </div>
      </div>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

