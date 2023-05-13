import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      likes {
        _id
        likeAuthor
        createdAt
      }
      likeCount
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      likes {
        _id
        likeAuthor
        createdAt
      }
      likeCount
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const DELETE_THOUGHT = gql`
  mutation removeThought($thoughtId: ID!) {
    removeThought(thoughtId: $thoughtId) {
      _id
    }
  }
`;

export const LIKE_POST= gql`
mutation likeThought($thoughtId: ID!){ 
  likeThought(thoughtId: $thoughtId) {
    _id
    thoughtText
    thoughtAuthor
    createdAt
    likes {
      _id
      likeAuthor
      createdAt
    }
    likeCount
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
  }
`