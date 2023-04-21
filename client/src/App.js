import React from "react";
import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from './components/Layout'; 
import Profile from './components/Profile'
import Settings from './components/Settings'
import FriendsFeed from './components/FriendsFeed'

export default function App() {
  return (
    <>
    <Routes>
        <Route element={<Layout />}>
        <Route index element={<Navigate to="/" />} />
        <Route path="/" element={<FriendsFeed />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />

        </Route>
    </Routes>
    
    </>
  )
}