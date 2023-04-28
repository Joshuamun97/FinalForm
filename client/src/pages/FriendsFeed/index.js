import React from 'react';
import { useQuery } from '@apollo/client';
import Share from '../../components/Share';
import FriendsList from '../../components/FriendsList/FriendsList';
import FriendsPosts from '../../components/FriendsPosts';
import './index.scss';

const FriendsFeed = () => {
    return (

        <div className="feedContainer d-flex flex-wrap justify-content-center w-100">
            <div>
                <FriendsPosts />
                <Share />
                <FriendsList />
                </div>
            </div>
        
    );
}

export default FriendsFeed;