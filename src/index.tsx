import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import Navbar from "./components/navbar";

import HomePage from "./pages/home";
import ResumePage from "./pages/resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/resume",
    element: <ResumePage/>
  }
]);
const App: React.FC = () => (
    <div className="d-flex flex-column container vh-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
);

//ReactDOM.render(<App />, document.getElementById('root'));
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <App />
);

