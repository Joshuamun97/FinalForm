import React from 'react'
import { useState } from 'react';
import './index.scss'
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';
import SingleThought from '../../pages/SinglePost/SinglePost';

export default function ShowComments() {
    const [showComments, setShowComments] = useState(true);
    return (
        <>
            <div>

                    <button
                        onClick={() => setShowComments(!showComments)}
                        className="postCommentText">
                        {showComments ? "Hide Comments" : "View Comments"}
                    </button>
            </div>
        </>
    )
}
