import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './MovieThumb.css';


const MovieThumb = (props) => {
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ?
                <BrowserRouter>
                    <Link to={{pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
                        <img className="clickable" src={props.image} alt="moviethumb" />
                    </Link>
                </BrowserRouter>
                :
                     <img src={props.image} alt="moviethumb" />


            
            }
        </div>
    )
}

export default MovieThumb;