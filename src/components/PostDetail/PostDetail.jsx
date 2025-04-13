import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const postData = useLoaderData();
    return (
        <div className='border border-blue-300 bg-slate-300 p-2 rounded-lg mb-1'>
            <h2 className='font-bold'>{postData.title}</h2>
            <p>{postData.body}</p>
        </div>
    );
};

export default PostDetail;