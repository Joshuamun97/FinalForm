import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import './index.scss';

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faTag, faMapMarkerAlt, faSmile, faUser } from '@fortawesome/free-solid-svg-icons';
import person from '../../assets/images/userImage.png'

const Share = () => {
  const [thoughtText, setThoughtText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // // update me object's cache
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      // });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
      setCharacterCount(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='container'>
      <form className="shareContainer d-flex rounded-2 " onSubmit={handleFormSubmit}>
        <div className='shareContent container flex-wrap p-2'>
          <div className="shareTop d-flex flex-wrap align-items-center mt-4">
            <img className='profilePic' src={person} />
            <input placeholder='Share something amazing...' className='shareInput border-0 w-75' name="thoughtText" value={thoughtText} onChange={handleChange} />
          </div>
          <hr className='shareHr mt-4 mb-4' />
          <div className="shareBottom d-flex flex-wrap align-items-center justify-content-between">
            <div className="shareOptions flex-wrap ms-1 d-flex">
              <div className="shareOption d-flex align-items-center">
                <FontAwesomeIcon className='shareIcon' icon={faPhotoFilm} color="#c94247" />
                <span className='shareText'> Media</span>
              </div>
              <div className="shareOption d-flex align-items-center">
                <FontAwesomeIcon className='shareIcon' icon={faTag} color="#c94247" />
                <span className='shareText'> Tag</span>
              </div>
              <div className="shareOption d-flex align-items-center">
                <FontAwesomeIcon className='shareIcon' icon={faMapMarkerAlt} color="#c94247" />
                <span className='shareText'> Location</span>
              </div>
              <div className="shareOption d-flex align-items-center">
                <FontAwesomeIcon className='shareIcon' icon={faSmile} color="#c94247" />
                <span className='shareText'> Feeling</span>
              </div>
            </div>
            <button className='shareButton flex-wrap' type="submit">Share</button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Share;
