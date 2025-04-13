import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Users Data</h2>
        </div>
    );
};

export default Users;