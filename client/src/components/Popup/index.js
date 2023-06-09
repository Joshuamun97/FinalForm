import './index.scss'
import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
            <div className="popup-inner">
                <button className='closeBtn'onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
            </div>
    </div>

  ) : "";
}

export default Popup