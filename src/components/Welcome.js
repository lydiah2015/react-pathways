import React, { useState } from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

export default function Welcome() {

// fetch("https://registration.ghh.news:8888/real-estate/serviceController/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

    return (
        <div style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            WELCOME TO THE SYSTEM
        </div>
    );
}