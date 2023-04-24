import './index.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faTag, faMapMarkerAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import person from '../../assets/images/Joshua.jpg'
export default function Share() {
    return (
        <div className='shareContainer d-flex rounded-2  col-md-4 mb-3 mt-3 ms-3 p-3'
            style={{ border: '1px solid #1a1a1a' }}>
            <div class='shareContent container flex-wrap p-2'>
                <div className="shareTop d-flex align-items-center">
                    <img className='profilePic' src={person} />
                    <input placeholder='Share something amazing...' className='shareInput border-0 w-75' />
                </div>
                <hr className='shareHr mt-4' />
                <div className="shareBottom d-flex align-items-center justify-content-between">
                    <div className="shareOptions ms-1 d-flex">
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
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
