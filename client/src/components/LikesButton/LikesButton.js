import { React, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function App() {
    const [counter, setCounter] = useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        if (counter > 0)
            setCounter(count => count - 1);
    };



    return (
        <div className="counter">
            <div className="btn__container">
                <button className="control__btn" onClick={increase}>
                <FontAwesomeIcon icon={faThumbsUp} color="#c94247" />
                </button>
                <button className="control__btn" onClick={decrease}>
                <FontAwesomeIcon icon={faThumbsDown} color="#c94247" />
                </button>
                <span className="counter__output">{counter} People like this</span>
            </div>
        </div>
    );
}


