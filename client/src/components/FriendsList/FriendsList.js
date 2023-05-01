import React, { useState } from 'react';
import person from '../../assets/images/kitten.png'
import person1 from '../../assets/images/elonm.png'
import person2 from '../../assets/images/lincoln.png'
import person3 from '../../assets/images/snoop.png'
import './index.scss'

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
    <div className='friendContainer'>
      <img className='profilePic' src={imageUrl} alt="friend" />
      {isFriend ? (
        <button className='FriendButton removeButton' onClick={handleRemoveFriend}>Remove</button>
      ) : (
        <button className='FriendButton addButton' onClick={handleAddFriend}>Add</button>
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
    <div className='container'>
      <div className='friendsListContainer d-flex rounded-2'>
        <div className="friendsList container flex-wrap p-3">
          <div className="friendsListHeader d-flex flex-wrap align-items-center justify-content-between mt-2">
            <h3>Friends List</h3>
            <button className='FriendButton findButton'>Find Friends</button>
          </div>
          <hr className='friendsHr mt-4 mb-5' />
          <div className="friendsListBody d-flex flex-wrap justify-content-around mb-4">
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