import React from 'react'
import Card from './Card'
import './CardGroup.css'

const CardGroup = (props) => {
  return (
    <div className='card-parent'>
    <div className="container">
    <Card
    CardImg={props.ImgOne}
    CardTitle={props.TitleOne}
    CardDesc={props.DescOne}
    CardUserName={props.UserNameOne}
    />
    <Card
    CardImg={props.ImgTwo}
    CardTitle={props.TitleTwo}
    CardDesc={props.DescTwo}
    CardUserName={props.UserNameTwo}
    />
    <Card
    CardImg={props.ImgThree}
    CardTitle={props.TitleThree}
    CardDesc={props.DescThree}
    CardUserName={props.UserNameThree}
    />

  </div>
  </div>

  )
}

export default CardGroup