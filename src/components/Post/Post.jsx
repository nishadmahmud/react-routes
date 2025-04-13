import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className='border border-blue-300 bg-slate-300 p-2 rounded-lg mb-1'>
            <h3 className='font-bold'>{title}</h3>
            <Link to={`/posts/${id}`} className='btn'>Show Detail</Link>
        </div>
    );
};

export default Post;