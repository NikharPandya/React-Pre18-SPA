import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <header>
        <div className='site-icon'>{props.iconText}</div>
        <div className='site-navigation'>
            <ul className='nav-list'>
                <li className='nav-link'><a href={props.LinkSrcOne} target="_blank" rel="noreferrer">{props.LinkTextOne}</a></li>
                <li className='nav-link'><a href={props.LinkSrcTwo} target="_blank" rel="noreferrer">{props.LinkTextTwo}</a></li>
                <li className='nav-link'><a href={props.LinkSrcThree} target="_blank" rel="noreferrer">{props.LinkTextThree}</a></li>
                <li className='nav-link'><a href={props.LinkSrcFour} target="_blank" rel="noreferrer">{props.LinkTextFour}</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header