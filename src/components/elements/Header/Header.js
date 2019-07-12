import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
            <BrowserRouter>
                <Link to="/">
                <img className="rmdb-logo" src="./images/reactMovie_logo.png" alt="rmdb-logo"/>
                </Link>
            </BrowserRouter>
                <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo"/>
            </div>
        </div>
    )
}

export default Header;
