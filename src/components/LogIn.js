import React from 'react'
// import React from 'react';
import logo from '../logo.svg';

export default function LogIn() {
    return (
        <>
            <div>
                <div class="card mx-auto p-2 " style={{ width: 400, margin: 80 }}>
                    <img src={logo} class="card-img-top" alt="Logo" />
                    <form>
                        <div className="mb-3">
                            <label htmlFor='email' className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='password' className="form-label">Password</label>
                            <input type="password" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary">LogIn</button>
                    </form>
                </div>
            </div>
        </>
    )
}
