import React, { useState, useEffect, useContext } from 'react';
import profilePic from '../../assets/images/userImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_THOUGHT } from '../../utils/mutations';
import LikeButton from '../LikesButton/LikesButton';
// import { AuthContext } from '../../context/auth';
import Popup from '../Popup';
import SingleThought from '../../pages/SinglePost/SinglePost';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';
import ShowComments from '../ShowComments';

const Post = ({
  thoughts,
  title,
  showTitle = true,
}) => {


  // const { user } = useContext(AuthContext);
  const [thoughtList, setThoughtList] = useState(thoughts);
  const [showComments, setShowComments] = useState(true);
  const [selectedThoughtId, setSelectedThoughtId] = useState(null);


  useEffect(() => {
    setThoughtList(thoughts);
  }, [thoughts]);

  const handleSelectThought = (thoughtId) => {
    setSelectedThoughtId(thoughtId);
  }

  // define the handleDelete function
  const [removeThought] = useMutation(DELETE_THOUGHT);

  const handleDelete = async (thoughtId) => {
    console.log('Deleting thought with ID:', thoughtId);
    try {
      const { data } = await removeThought({ variables: { thoughtId } });
      console.log('Deleted thought:', data);
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
                <LikeButton thought={thought} likeCount={thought.likes.length} />
              </div>
              <div className="postBottomRight">
                {/* <ShowComments showComments={showComments} setShowComments={setShowComments} /> */}
                <ShowComments thoughtId={thought._id} selectedThoughtId={selectedThoughtId} handleSelectThought={handleSelectThought}/>
              </div>
            </div>
          </div>
          {/* {showComments && */}
          {selectedThoughtId === thought._id && showComments && (
            <div className="p-3 viewComments"
            >
              <CommentForm thoughtId={thought._id} />
              <CommentList comments={thought.comments} />
            </div>
            )}
        </div>
      ))}
    </div>
  );
};



export default Post;
