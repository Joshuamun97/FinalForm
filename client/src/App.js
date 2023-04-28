import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from './pages/Profile/index'
import Settings from './pages/Settings/index'
import FriendsFeed from './pages/FriendsFeed/index'
import Header from "./components/Header";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from "./pages/Home/Home";
import SinglePost from "./pages/SinglePost/SinglePost";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/friendsFeed" element={<FriendsFeed />} /> */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/singlePost/:thoughtId" element={<SinglePost />} />
          </Routes>
        </div>
      </Router>

    </ApolloProvider>
  );
}