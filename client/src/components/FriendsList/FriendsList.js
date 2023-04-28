import './index.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faTag, faMapMarkerAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import person from '../../assets/images/kitten.png'
import person1 from '../../assets/images/elonm.png'
import person2 from '../../assets/images/lincoln.png'
import person3 from '../../assets/images/snoop.png'
export default function FriendsList() {
    return (
        <div className='friendContainer d-flex rounded-2  col-md-4 mb-3 mt-3 ms-2 p-4'
            style={{ border: '1px solid #1a1a1a' }}>
            <div class='shareContent container flex-wrap p-6'>
                <div className="shareTop d-flex align-items-center ">
                    <img className='profilePic' src={person} />
                    <img className='profilePic' src={person1} />
                    <img className='profilePic' src={person2} />
                    <img className='profilePic' src={person3} />
                </div>
                <hr className='shareHr mt-4' />
                <div className="shareBottom d-flex align-items-center justify-content-between">
                    <div className="friendsOptions ms-1 d-flex">
            
                    </div>
                    <button className='FriendButton'>FindFriends</button>
                </div>
            </div>
        </div>
    )
}
