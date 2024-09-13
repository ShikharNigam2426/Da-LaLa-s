import React from 'react'
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram }

const Footer = () => {
  return (
    <FooterComponent className='footer container'>
      <div className="row footerRow">
        <div className="col-9 d-flex flex-column justify-content-center">
          <img src="./assets/image/logo.jpg" alt="" style={{ 'width': '60px' }}/>
          <p>10/624 Indira Nagar, Lucknow.</p>
          <p>+91 999 9999 999</p>
          <p>dalalas999@gmail.com</p>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center">
          <h1>Socials</h1>
          <div>
          </div>

        </div>
      </div>
      <div className="row copyRightRow d-flex justify-content-center">All rights reserved &copy 2024</div>
    </FooterComponent>
  )
}

const FooterComponent = styled.div`
  background-color: #ffffff;

  p{
    margin: 0.4rem 0;
  }

  .footerRow{
    height: 40vh;
  }
  .copyRightRow{
    height: 5vh;
  }
`;

export default Footer