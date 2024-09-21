import React from 'react'
import styled from 'styled-components'
import '../fonts.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
    return (
        <ContactComponent>
            <div className="row fullHeight">
                <div className="col-lg-8 col-md-8 col-6 bg-white py-4 pl-4">
                    <p className="ubuntu-mediun">Send us a message</p>
                    <div className="row text-secondary">
                        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column py-2">
                            <label htmlFor="">Name</label>
                            <input className='py-1 px-2' type="text" placeholder='Enter your name'/>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column py-2">
                            <label htmlFor="">E-Mail</label>
                            <input className='py-1 px-2' type="text" placeholder='Enter your E-Mail'/>
                        </div>
                    </div>
                    <div className="row text-secondary">
                        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column py-2">
                            <label htmlFor="">Phone no.</label>
                            <input className='py-1 px-2' type="text" placeholder='Enter your Phone no.'/>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column py-2">
                            <label htmlFor="">Favourite dish</label>
                            <input className='py-1 px-2' type="text" placeholder='Enter your Most liked dish'/>
                        </div>
                    </div>
                    <div className="row"></div>
                    <div className="row"></div>
                </div>
                <div className="col-lg-4 col-md-4 col-6 orange py-4 pl-4">
                    <p className='ubuntu-medium'>Contact Information</p>
                    <div className='ubuntu-regular text-secondary'>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo quod, nisi fugiat dolor quis.</p>
                        <p className='d-flex align-items-center'><LocationOnIcon />10/634 Indira Nagar, Lucknow.</p>
                        <p className='d-flex align-items-center'><LocalPhoneIcon />+91 8577047704</p>
                        <p className='d-flex align-items-center'><MailIcon className='mr-1' />dalalaslko@gmail.com</p>
                    </div>
                </div>
            </div>
        </ContactComponent>
    )
}

const ContactComponent = styled.div`
    position: absolute;
    height: 80vh;
    width: 100vw;
    top: 12vh;

    .fullHeight{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .orange{
        border-left: 1px solid #c0bfbf;
        background-color: white;

        @media(max-width: 768px){
            p{
                font-size: 12px;
            }
        }
    }
`;

export default Contact