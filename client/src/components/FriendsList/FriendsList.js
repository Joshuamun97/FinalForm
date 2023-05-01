import React, { useState } from 'react';
import person from '../../assets/images/kitten.png';
import person1 from '../../assets/images/elonm.png';
import person2 from '../../assets/images/lincoln.png';
import person3 from '../../assets/images/snoop.png';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faRemove } from '@fortawesome/free-solid-svg-icons';

const Friend = ({ imageUrl, onAddFriend, onRemoveFriend }) => {
  const [isFriend, setIsFriend] = useState(false);

  const handleAddFriend = () => {
    setIsFriend(true);
    onAddFriend();
  };

  const handleRemoveFriend = () => {
    setIsFriend(false);
    onRemoveFriend();
  };

  return (
    <div className='friendContainer d-flex justify-content-between'>
      <img className='profilePic m-2 justify-content-between' src={imageUrl} alt="friend" />
      {isFriend ? (
        <button className='friendButton removeButton' onClick={handleRemoveFriend}>
           <FontAwesomeIcon icon={faRemove} color="#c94247" />
          </button>
      ) : (
        <button className='friendButton addButton' onClick={handleAddFriend}>
           <FontAwesomeIcon icon={faAdd} color="#c94247" />
          </button>
      )}
    </div>
  );
};

const FriendsList = () => {
  const [friends, setFriends] = useState([
    { imageUrl: person, isFriend: true },
    { imageUrl: person1, isFriend: false },
    { imageUrl: person2, isFriend: false },
    { imageUrl: person3, isFriend: true }
  ]);

  const handleAddFriend = (index) => {
    const newFriends = [...friends];
    newFriends[index].isFriend = true;
    setFriends(newFriends);
  };

  const handleRemoveFriend = (index) => {
    const newFriends = [...friends];
    newFriends[index].isFriend = false;
    setFriends(newFriends);
  };

  return (
    <div className='container '>
      <div className='friendsListContainer d-flex rounded-2'>
        <div className="friendsList container flex-wrap p-3">
          <div className="friendsListHeader d-flex flex-wrap align-items-center justify-content-between mt-2">
            <h3>Suggested Friends</h3>
            <button className='FriendButton findButton'>Find Friends</button>
          </div>
          <hr className='friendsHr mt-4' />
          <div className="friendsListBody d-flex flex-wrap flex-column justify-content-center mb-2">
            {friends.map((friend, index) => (
              <Friend
                key={index}
                imageUrl={friend.imageUrl}
                onAddFriend={() => handleAddFriend(index)}
                onRemoveFriend={() => handleRemoveFriend(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default FriendsList;