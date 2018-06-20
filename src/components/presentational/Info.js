import React from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';

const Info = (history) => {
    return (
        <div>
            <Header history={history}/>
            <h1>Este es la pagina donde se muestra el porque del proyecto</h1>
        </div>
    );
};

export default withRouter(Info);