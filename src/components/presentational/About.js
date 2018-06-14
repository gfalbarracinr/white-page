import React from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom'

const About = (history) => {
    return (
        <div>
           <Header history={history}/>
           <h1>Esta la pagina que habla sobre el desarrollador </h1> 
        </div>
    );
};

export default withRouter(About);