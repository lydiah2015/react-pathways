import React, { useState } from "react";
import axios from "axios"; // Import Axios
import logo from "../logo.svg";
// import RoleList from "./RoleList";
// import { useHistory } from "react-router-dom";

export default function LogIn() {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    // const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://registration.ghh.news:8888/real-estate/serviceController/login",
                {
                    username: username,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                setEmail("");
                setPassword("");
                setError(null);
                // Handle successful login here, e.g., redirect the user
                // history.push("/roles");
            } else {
                setError("Check your email/password");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <div className="card mx-auto p-2" style={{ width: 400, margin: 80 }}>
                <img src={logo} className="card-img-top" alt="Logo" />
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            value={username}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}





// import React, { useState } from 'react';

// function LogIn() {
//     const [formData, setFormData] = useState({ username: '', password: '' });

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('https://registration.ghh.news:8888/real-estate/serviceController/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.status === 200) {
//                 console.log('Login successful');
//                 // You can add logic to handle a successful login here.
//             } else {
//                 console.log('Login failed');
//                 // You can add logic to handle a failed login here.
//             }
//         } catch (error) {
//             console.error('An error occurred:', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default LogIn;

