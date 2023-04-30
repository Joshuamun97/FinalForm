
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhotoFilm, faTag, faMapMarkerAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import person from '../../assets/images/kitten.png'
import person1 from '../../assets/images/elonm.png'
import person2 from '../../assets/images/lincoln.png'
import person3 from '../../assets/images/snoop.png'
import './index.scss'

const Friend = ({ imageUrl }) => {
  return (
    <img className='profilePic' src={imageUrl} alt="friend" />
  );
};

const FriendsList = () => {
  return (
    <div className='container'>
    <div className='friendsListContainer d-flex rounded-2'>
      <div className="friendsList container flex-wrap p-3">
        <div className="friendsListHeader d-flex flex-wrap align-items-center justify-content-between mt-2">
          <h3>Friends List</h3>
          <button className='FriendButton findButton'>Find Friends</button>
        </div>
        <hr className='friendsHr mt-4 mb-5' />
        <div className="friendsListBody d-flex flex-wrap justify-content-around mb-4">
          <Friend imageUrl={person} />
          <Friend imageUrl={person1} />
          <Friend imageUrl={person2} />
          <Friend imageUrl={person3} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FriendsList;
