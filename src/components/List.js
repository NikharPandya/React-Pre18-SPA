import React from 'react'
import './List.css'

const List = (props) => {
    const {Style = "initial"} = props
  return (
    <ul className='list-parent' style={{ listStyle:`${Style}` }}>
        <li className='list-child'>
            <a 
                className='list-link' 
                href={props.SrcOne} 
                target="_blank" 
                rel="noreferrer">
                {props.TextOne}
            </a>
        </li>
        <li className='list-child'>
            <a 
                className='list-link' 
                href={props.SrcTwo} 
                target="_blank" 
                rel="noreferrer">
                {props.TextTwo}
            </a>
        </li>
        <li className='list-child'>
            <a 
                className='list-link' 
                href={props.SrcThree} 
                target="_blank" 
                rel="noreferrer">
                {props.TextOne}
            </a>
        </li>
        <li className='list-child'>
            <a 
                className='list-link' 
                href={props.SrcFour} 
                target="_blank" 
                rel="noreferrer">
                {props.TextFour}
            </a>
        </li>
    </ul>
  )
}

export default List