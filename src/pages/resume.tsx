import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Helmet} from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/resume.css';

import resumeContent from "./resume.md";

const ResumePage: React.FC = () => (
  <div>
    <Helmet>
      <title>Resume - Ethan Leyden</title>
        </Helmet>
        <div className="py-4 w-75 mx-auto">
            <ReactMarkdown>{resumeContent}</ReactMarkdown>
        </div>
    </div>
);
 
export default ResumePage;
