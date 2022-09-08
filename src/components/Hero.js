import React from 'react'
import './Hero.css'

const Hero = (props) => {

  return (
    <div className='banner' 
        style={{backgroundImage:`url(${props.ImgSrc})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    
        <h1 className='banner-title'>{props.Title}</h1>

        <a className='banner-btn' 
            href={props.BtnSrc} 
            target="_blank" 
            rel="noreferrer">{props.BtnText}</a>
    </div>
  )
}

export default Hero