import React from 'react';
import './loading.css';

function Loading(props){
    const active = props.active;
    return(
        <div className={`loading ${active && `active`}`}>
        <div className="spinner-grow text-primary" role="status">
            </div>
            <div className="spinner-grow text-secondary" role="status">
            </div>
            <div className="spinner-grow text-success" role="status">
            </div>
            <div className="spinner-grow text-danger" role="status">
            </div>
            <div className="spinner-grow text-warning" role="status">
            </div>
            <div className="spinner-grow text-info" role="status">
            </div>
            <div className="spinner-grow text-light" role="status">
            </div>
            <div className="spinner-grow text-dark" role="status">
            </div>
        <h5>Loading ...</h5>
    </div> 
    );

}

export default Loading;