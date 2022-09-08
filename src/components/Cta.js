import React from 'react'
import './Cta.css'

const Cta = (props) => {
  return (
    <div className='cta-parent'>
    <div className='cta-container' style={{backgroundColor:`${props.BackgroundColor}`}}>
      <h1 className='cta-title'>{props.Title}&nbsp;{props.Icon}</h1>
      <a className='cta-btn' style={{backgroundColor:`${props.BtnColor}`}} href={props.BtnUrl}>{props.BtnText}</a>
    </div>
    </div>
  )
}

export default Cta