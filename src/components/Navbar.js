import React from 'react'

export default function Navbar() {
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
                                <li><a className="dropdown-item" href="#">Roles</a></li>
                                <li><a className="dropdown-item" href="#">Users</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        {/* <li classNameName="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li> */}
                    </ul>
                    {/* <span className="navbar-text">
                        Navbar text with an inline element
                    </span> */}
                </div>
            </div>
        </nav>
    )
}
