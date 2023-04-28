
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhotoFilm, faTag, faMapMarkerAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import person from '../../assets/images/kitten.png'
import person1 from '../../assets/images/elonm.png'
import person2 from '../../assets/images/lincoln.png'
import person3 from '../../assets/images/snoop.png'

const Friend = ({ imageUrl }) => {
  return (
    <img className='profilePic' src={imageUrl} alt="friend" />
  );
};

const FriendsList = () => {
  return (
    <div className='friendsListContainer'>
      <div className="friendsList">
        <div className="friendsListHeader d-flex align-items-center justify-content-between">
          <h3>Friends List</h3>
          <button className='FriendButton'>Find Friends</button>
        </div>
        <hr className='shareHr' />
        <div className="friendsListBody d-flex flex-wrap justify-content-around mt-4">
          <Friend imageUrl={person} />
          <Friend imageUrl={person1} />
          <Friend imageUrl={person2} />
          <Friend imageUrl={person3} />
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
