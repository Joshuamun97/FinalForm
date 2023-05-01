import { React, useState } from 'react'
import './index.scss'

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
            <span className="counter__output">{counter}</span>
            <div className="btn__container">
                <button className="control__btn" onClick={increase}>Like</button>
                <button className="control__btn" onClick={decrease}>Dislike</button>
            </div>
        </div>
    );
}


