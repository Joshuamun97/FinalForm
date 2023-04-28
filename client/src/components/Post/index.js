import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/images/Joshua.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './index.scss'

const Post = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  const sampleThoughts = [
    {
      _id: '1',
      thoughtText: 'Chillin like a villan',
      thoughtAuthor: 'Joshua Muniz',
      createdAt: '5 mins ago',
    },
    {
      _id: '2',
      thoughtText: 'Lorem ipsum dolor sit amet',
      thoughtAuthor: 'John Doe',
      createdAt: '2 hours ago',
    },
    {
      _id: '3',
      thoughtText: 'Consectetur adipiscing elit',
      thoughtAuthor: 'Jane Smith',
      createdAt: '1 day ago',
    },
  ];

  const actualThoughts = thoughts || sampleThoughts;

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {actualThoughts.map((thought) => (
        <div key={thought._id} className="post mb-3 rounded-2" style={{ border: '1px solid #1a1a1a' }}>
          <div className="postWrapper p-3">
            <div className="postTop d-flex align-items-center justify-content-between">
              <div className="postTopLeft d-flex align-items-center">
                <img className="profileImage" src={profilePic} alt="" />
                <span className="postUsername">{thought.thoughtAuthor}</span>
                <span className="postTimeStamp">{thought.createdAt}</span>
              </div>
              <div className="postTopRight">
                <FontAwesomeIcon className='moreIcon' icon={faEllipsisVertical} color="#c94247" />
              </div>
            </div>
            <div className="postBody">
              <span className="postText">{thought.thoughtText}</span>
            </div>
            <div className="postBottom d-flex align-items-center justify-content-between">
              <div className="postBottomLeft d-flex align-items-center">
                <FontAwesomeIcon className='likeIcon me-1' icon={faThumbsUp} color="#c94247" />
                <span className="likeCounter">5 people liked this</span>
              </div>
              {/* <div className="postBottomRight">
                <span className="postCommentText">2 comments</span>
              </div> */}
          <div className="postBottomRight">
              <Link to={`/singlePost/${thought._id}`} className="postCommentText">
              <span className="commentIcon">&#9998;</span>
              {thought.comments && thought.comments.length > 0 &&
              <span className="commentCount">{thought.comments.length}</span>}
              <span className="commentText">{thought.comments && thought.comments.length === 1 ? 'Comment' : 'Comments'}</span>
              </Link>
          </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
