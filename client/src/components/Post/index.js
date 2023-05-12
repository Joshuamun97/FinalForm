import React, { useState, useEffect, useContext } from 'react';
import profilePic from '../../assets/images/userImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_THOUGHT } from '../../utils/mutations';
import LikeButton from '../LikesButton/LikesButton';
import { AuthContext } from '../../context/auth';

const Post = ({
  body,
  username,
  thoughts,
  title,
  id,
  likes,
  likeCount,
  showTitle = true,
  showUsername = true,
}) => {

  const { user } = useContext(AuthContext);
  const [thoughtList, setThoughtList] = useState(thoughts);

  useEffect(() => {
    setThoughtList(thoughts);
  }, [thoughts]);

  // define the handleDelete function
  const [removeThought] = useMutation(DELETE_THOUGHT);

  const handleDelete = async (thoughtAuthor, thoughtId) => {
    // console.log('Deleting thought with ID:', thoughtId);
    try {
      const { data } = await removeThought({ variables: { thoughtAuthor, thoughtId } });
      //  console.log('Deleted thought:', data);
      // update the list of thoughts after deleting the thought
      setThoughtList(thoughtList.filter(thought => thought._id !== thoughtId));
      window.location.reload(); // reload the page
    } catch (error) {
      console.error('Error deleting thought:', error);
    }
  };
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughtList.map((thought) => (
        <div key={thought._id} className="post mb-3 rounded-2" >
          <div className="postWrapper p-3">
            <div className="postTop d-flex align-items-center justify-content-between">
              <div className="postTopLeft d-flex align-items-center">
                <img className="profileImage" src={profilePic} alt="" />
                <span className="postUsername">{thought.thoughtAuthor}</span>
                <span className="postTimeStamp">{thought.createdAt}</span>
              </div>
              {/* {thought && thought.thoughtAuthor === thoughtAuthor && (
                              <div className="postTopRight">
                              <button className='moreIcon' onClick={() => handleDelete(thought._id)}>
                                <FontAwesomeIcon icon={faTrash} color="#c94247" />
                              </button>
                            </div> */}
              {/* )} */}
              <div className="postTopRight">
                <button className='moreIcon' onClick={() => handleDelete(thought._id)}>
                  <FontAwesomeIcon icon={faTrash} color="#c94247" />
                </button>
              </div>

            </div>
            <div className="postBody">
              <span className="postText">{thought.thoughtText}</span>
            </div>
            <div className="postBottom d-flex align-items-center justify-content-between">
              <div className="postBottomLeft d-flex align-items-center">
                <LikeButton 
                user= { user }
                post={{id, likes, likeCount }}
                />
              </div>
              <div className="postBottomRight">
                <Link to={`/singlePost/${thought._id}`} className="postCommentText">
                  {/* <span className="commentIcon"></span> */}
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
