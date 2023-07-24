import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BiSolidPhoneOutgoing} from 'react-icons/bi'
import './footer.css'
const Footer = () => {
  return (
    <div id='footer'>
        <div className="footerSec1">
            <p className='footerDetails' ><MdEmail/> nagarajyallurkar692@gmail.com</p>
            <p className='footerDetails' ><BiSolidPhoneOutgoing/> 9480613711</p>
        </div>
        <div className="footerSec2">
            <p>Nagaraj Yallurkar &copy; 2023 All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
