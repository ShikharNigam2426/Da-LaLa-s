import React from 'react'
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram }

const Footer = () => {
  return (
    <FooterComponent className='footer container'>
      <div className="row footerRow d-flex justify-content-center align-items-center">
        <div className="col-8 d-flex flex-column footerSection">
          <img src="./assets/image/logo.jpg" alt="" style={{ 'width': '60px' }} />
          <a href="https://maps.app.goo.gl/55RTdofbnXSnXJT3A"><p>10/634 Indira Nagar, Lucknow.</p></a>
          <a href="https://wa.me/918577047704" target='__blank'>
            <p>+91 8577047704</p>
          </a>
          <p>dalalaslko@gmail.com</p>

          <Link className='link animate my-2' to={`/Contact`}>
            <button className="btn btn-outline-primary">Contact Us</button>
          </Link>
        </div>
        <div className="col-4 d-flex flex-column footerSection">
          <h4 className='mb-2'>Socials</h4>
          <a className='d-flex my-1  align-items-center social' href="https://www.instagram.com/da_lalaslko?igsh=MTBrZWRmcmRuODF6ZA==" target='blank'> <InstagramIcon /> Instagram </a>
          <a className='d-flex my-1  align-items-center social' href="https://wa.me/918577047704" target='blank'> <WhatsAppIcon /> WhatsApp</a>
          <div>
          </div>

        </div>
      </div>
      <div className="row copyRightRow d-flex justify-content-center">All rights reserved &copy; 2024</div>
    </FooterComponent>
  )
}

const FooterComponent = styled.div`

.social{
  gap: 10px;
  font-weight: 500;
}
  background-color: #ffffff;

  p{
    margin: 0.4rem 0;
  }
  a{
    text-decoration: none;
    color: black;
    transition: ease all 0.3s;
  }

  .footerSection{
    a:hover{
    transform: translateX(10px);
  }
  }

  .footerRow{
    height: 40vh;
  }
  .copyRightRow{
    height: 5vh;
    border-top: 1px solid grey;
    padding-top: 5px;
  }

  @media (max-width: 768px) {
    p,a{
      font-size: 12px;
    }
  }
`;

export default Footer