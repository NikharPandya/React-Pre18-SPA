import React from 'react'
import List from './List'
import Quote from './Quote'
import './Footer.css'

const Footer = (props) => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='primary-menu'>
          <List 
          TextOne={props.ptone}
          SrcOne={props.psone}

          TextTwo={props.pttwo}
          SrcTwo={props.pstwo}

          TextThree={props.ptthree}
          SrcThree={props.psthree}

          TextFour={props.ptfour}
          SrcFour={props.psfour}
          
          Style={props.pstyle}
          />
        </div>

        <div className='secondary-menu'>
        <List 
          TextOne={props.stone}
          SrcOne={props.ssone}

          TextTwo={props.sttwo}
          SrcTwo={props.sstwo}

          TextThree={props.stthree}
          SrcThree={props.ssthree}

          TextFour={props.stfour}
          SrcFour={props.ssfour}

          Style={props.sstyle}
          />
        </div>

        <div className='quote'>
          <Quote text={props.quote} />
        </div>
      </div>
    </footer>
  )
}

export default Footer