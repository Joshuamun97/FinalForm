import React from 'react'
import './index.scss'
import profilePic from '../../../assets/images/Joshua.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Post() {
  return (
    <div className="post rounded-2"
    style={{ border: '1px solid #1a1a1a' }}>
        <div className="postWrapper p-3">
            <div className="postTop d-flex align-items-center justify-content-between">
                <div className="postTopLeft d-flex align-items-center">
                    <img className="profileImage" src={profilePic} alt="" />
                    <span className="postUsername">Joshua Muniz</span>
                    <span className="postTimeStamp">5 mins ago</span>
                </div>
                <div className="postTopRight">
                <FontAwesomeIcon className='moreIcon' icon={faEllipsisVertical} color="#c94247" />
                </div>
            </div>
            <div className="postBody">
                <span className="postText">Chillin like a villan</span>
                <img className="postImage" src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
            </div>
            <div className="postBottom d-flex align-items-center justify-content-between">
                <div className="postBottomLeft d-flex align-items-center">
                <FontAwesomeIcon className='likeIcon me-1' icon={faThumbsUp} color="#c94247" />
                <span className="likeCounter">5 people liked this</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">2 comments</span>
                </div>
            </div>

            </div>
        </div>
  )
}
