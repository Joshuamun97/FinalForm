import React from 'react';
import { useQuery } from '@apollo/client';

import FriendsPosts from '../../components/FriendsPosts'

const FriendsFeed = () => {
    return (

        <div className="flex-row justify-center">
            <div
                className="mx-auto col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
            >
                <FriendsPosts />
            </div>
        </div>
    );
}

export default FriendsFeed;