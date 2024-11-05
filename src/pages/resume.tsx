import React from 'react';
import {Helmet} from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/resume.css';

const ResumePage: React.FC = () => (
    <div>
    <Helmet>
        <title>Resume - Ethan Leyden</title>
    </Helmet>
    <h1> This is Ethan's Resume</h1>
    </div>
);

export default ResumePage;