import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

const CommentItem = ({ commentAuthor, commentText, createdAt }) => (
  <Comment>
    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
    <Comment.Content>
      <Comment.Author>{commentAuthor}</Comment.Author>
      <Comment.Text>{commentText}</Comment.Text>
      <Comment.Metadata>
        <div>{createdAt}</div>
      </Comment.Metadata>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
        <Comment.Action>Save</Comment.Action>
        <Comment.Action>Hide</Comment.Action>
        <Comment.Action>
          <Icon name='expand' />
          Full-screen
        </Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default CommentItem;

// import React from 'react';

// const CommentItem = ({ commentAuthor, commentText, createdAt }) => (
//   <div>
//     <div>{commentAuthor}</div>
//     <div>{commentText}</div>
//     <div>{createdAt}</div>
//     <div>
//       <button>Reply</button>
//       <button>Save</button>
//       <button>Hide</button>
//       <button>
//         Full-screen
//       </button>
//     </div>
//   </div>
// );

// export default CommentItem;

