import React from 'react'
import './News.css'
// import def from 'ajv/dist/vocabularies/applicator/additionalItems'

const Spinner = () => {
 
    return (
      <div>
        <div id='loader' className="dot-spinner">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div>
      </div>
    )
  
}

export default Spinner