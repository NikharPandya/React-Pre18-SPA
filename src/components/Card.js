import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
        <div className="card-header">
        <img src={props.CardImg} alt="rover" />
        </div>
        <div className="card-body">
        <h4>{props.CardTitle}</h4>
        <p>{props.CardDesc}</p>
        <div className="user">
            <img src="/img/nik.jpg" alt="user" />
            <div className="user-info">
            <h5>{props.CardUserName}</h5>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card