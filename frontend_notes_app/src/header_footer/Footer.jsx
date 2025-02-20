import React from 'react'
import "./HeadFoot.css"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


function Footer() {
  return (
    <div className='footer_main'>
      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#b989b8f3' }}>
        <MDBContainer className='pt-4 social_app'>
          <FaFacebook className='fab social_app_icon' />
          <CiLinkedin className='social_app_icon' />
          <FaXTwitter className='social_app_icon' />
          <FaSquareInstagram className='social_app_icon' />
        </MDBContainer>

        <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className='text-dark' href='#'>
            Rupesh singh
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer




