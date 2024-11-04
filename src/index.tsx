import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

    //<!--<div className="d-flex w-100 h-100 p-3 flex-column"></div>-->
const App: React.FC = () => (
  <div className="cover-container container-fluid p-3 mx-auto overflow-hidden">
    <header className='row'>
      <div>
        <h3 className="float-md-start mb-0">Ethan Leyden</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
          <a className="nav-link fw-bold py-1 px-0" href="#">Features</a>
          <a className="nav-link fw-bold py-1 px-0" href="#">Contact</a>
        </nav>
      </div>
    </header>

    <main className="row" id="fp-hero">
      <div className="col">
      <h1>Welcome to the site</h1>
      <p className="lead">It's definitely still under construction. Do you know how to vertically center content with Bootstrap? I sure don't</p>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
      </p>
      </div>
    </main>
  </div>

)

ReactDOM.render(<App />, document.getElementById('root'));

