import React, { useState, useEffect } from 'react';

export default function RoleList() {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        // Fetch data from the remote API
        fetch('https://registration.ghh.news:8888/real-estate/serviceController/getRoles')
            .then((response) => response.json())
            .then((data) => {
                setRoles(data); // Update the state with the fetched data
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <ul className="list-group">
                {roles.map((role, index) => (
                    <li key={index} className="list-group-item">
                        {role.name} {/* Replace "name" with the actual property name from the API response */}
                    </li>
                ))}
            </ul>
        </>
    );
}
