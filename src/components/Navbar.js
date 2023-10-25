import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const accessToken = localStorage.getItem('access_token'); // Replace 'access_token' with your actual token key
    if (!accessToken) {
        return "Kindly Login to access system";
    }
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar w/ text</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Welcome</a>
                        </li>
                        <li className="nav-item">
                            <ul className="dropdown-menu">
                                <li><Link to="/roles" className="dropdown-item" >Roles</Link></li>
                                {/* <li><a className="dropdown-item" href="#">Users</a></li> */}
                                {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}


