import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const postData = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className='border border-blue-300 bg-slate-300 p-2 rounded-lg mb-1'>
            <h2 className='font-bold'>{postData.title}</h2>
            <p>{postData.body}</p>
            <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail;