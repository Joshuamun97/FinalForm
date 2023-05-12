import { React, useState, useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';



export default function LikeButton({ user, post: { id, likeCount, likes } }) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (user && likes.find(like => like.username === user.username)) {
            setIsLiked(true);
        } else setIsLiked(false)
    }, [user, likes]);

    const [likePost] = useMutation(LIKE_POST_MUTATION, {
        variables: {postId: id}
    });

    const likeButton = likes ? (
        <div className="counter">
            <div className="btn__container">
                <button className="control__btn" onClick={likePost}>
                    <FontAwesomeIcon icon={faThumbsUp} color="#FFF" />
                </button>
            </div>
        </div>
    ) : (
        <div className="counter">
            <div className="btn__container">
                <button className="control__btn" onClick={likePost}>
                    <FontAwesomeIcon icon={faThumbsUp} color="#c94247" />
                </button>
            </div>
        </div>
    )

    return (
        <div className="counter">
            <div className="btn__container">
                <button className="control__btn" onClick={likePost}>
                    <FontAwesomeIcon icon={faThumbsUp} color="#c94247" />
                </button>
            </div>
        </div>
    );
}

const LIKE_POST_MUTATION = gql`
    mutation likePost($postId: ID!){
        likePost(postId: $postId){
            id
            likes{
                id username
            }
            likeCount
    }
}
`


