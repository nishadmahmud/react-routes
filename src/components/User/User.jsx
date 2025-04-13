import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, email, phone, id} = user;
    return (
        <div className='border border-blue-300 bg-slate-300 p-2 rounded-lg mb-1'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`} className='btn'>Show Details</Link>
        </div>
    );
};

export default User;