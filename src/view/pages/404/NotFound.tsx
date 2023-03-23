import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const NotFound = (props: RouteComponentProps<{}>) => {
    return (
        <div className="page-error tile">
            <h1><i className="fa fa-exclamation-circle"></i> Error 404: Página no encontrada</h1>
            <p>La página que estud a solicitado no se encuentra.</p>
            <p><button className="btn btn-primary" onClick={() => props.history.goBack()}>Regresar</button></p>
        </div>
    );
}

export default NotFound;