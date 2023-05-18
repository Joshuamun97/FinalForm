// import React from 'react'
// import { useState } from 'react';
// import './index.scss'
// import CommentForm from '../CommentForm/CommentForm';
// import CommentList from '../CommentList/CommentList';
// import SingleThought from '../../pages/SinglePost/SinglePost';

// export default function ShowComments() {
//     const [showComments, setShowComments] = useState(true);
//     return (
//         <>
//             <div>

//                     <button
//                         onClick={() => setShowComments(!showComments)}
//                         className="postCommentText">
//                         {showComments ? "Hide Comments" : "View Comments"}
//                     </button>
//             </div>
//         </>
//     )
// }

import React from 'react';
import './index.scss';

export default function ShowComments({ thoughtId, selectedThoughtId, handleSelectThought }) {
    const handleShowComments = () => {
      if (selectedThoughtId === thoughtId) {
        handleSelectThought(null); // Deselect the post if it is already selected
      } else {
        handleSelectThought(thoughtId); // Select the clicked post
      }
    };
  
    return (
      <>
        <div>
          <button onClick={handleShowComments} className="postCommentText">
            {selectedThoughtId === thoughtId && "Hide Comments"}
            {selectedThoughtId !== thoughtId && "Show Comments"}
          </button>
        </div>
      </>
    );
  }
  