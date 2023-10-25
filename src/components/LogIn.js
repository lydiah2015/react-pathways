import React, { useState } from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// fetch("https://registration.ghh.news:8888/real-estate/serviceController/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Email:", email); // Debug log
        console.log("Password:", password); // Debug log

        try {
            const response = await fetch("https://registration.ghh.news:8888/real-estate/serviceController/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: 'follow',
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log("RESPONSEEEEEEE ", data)
                localStorage.setItem("accessKey", data?.accessKey)
                navigate("/dashboard")
                // Handle successful login here
            } else {
                console.log("Check your email/password");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="card mx-auto p-2 " style={{ width: 400, margin: 80 }}>
                <img src={logo} className="card-img-top" alt="Logo" />
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Username
                        </label>
                        <input
                            type="email"
                            name="username"
                            className="form-control"
                            aria-describedby="emailHelp"
                            value={email}
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
                        LogIn
                    </button>
                </form>
            </div>
        </div>
    );
}