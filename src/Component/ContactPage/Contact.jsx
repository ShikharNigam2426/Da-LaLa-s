import React, { useState } from 'react';
import styled from 'styled-components';
import '../fonts.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [favoriteDish, setFavoriteDish] = useState('');

    const handleOrderNow = () => {
        // Validation check for empty fields
        if (!fullName || !email || !phoneNumber || !favoriteDish) {
            alert('Please fill out all fields before sending the message.');
            return;
        }

        const phone = "+918577047704"; // Local variable for clarity
        const baseUrl = `https://wa.me/${phone}?text=`;

        let message = `\n*Full Name*: ${fullName}`;
        message += `\n*Email*: ${email}`;
        message += `\n*Phone Number*: ${phoneNumber}`; // Use the local variable to avoid confusion
        message += `\n*Issue/Review*: ${favoriteDish}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`${baseUrl}${encodedMessage}`, '_blank');
    };

    return (
        <ContactComponent>
            <div className="row fullHeight">
                <div className="col-lg-8 col-md-8 col-6 bg-white py-4 pl-4">
                    <p className="ubuntu-medium">Send us your feedback</p>
                    <div className="row text-secondary">
                        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column py-2">
                            <label htmlFor="">Name</label>
                            <input
                                className='py-1 px-2'
                                type="text"
                                placeholder='Enter your name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column py-2">
                            <label htmlFor="">E-Mail</label>
                            <input
                                className='py-1 px-2'
                                type="text"
                                placeholder='Enter your E-Mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row text-secondary">
                        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column py-2">
                            <label htmlFor="">Phone no.</label>
                            <input
                                className='py-1 px-2'
                                type="text"
                                placeholder='Enter your Phone no.'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column py-2">
                            <label htmlFor="">Feedback</label>
                            <input
                                className='py-1 px-2'
                                type="text"
                                placeholder='Enter your feedback'
                                value={favoriteDish}
                                onChange={(e) => setFavoriteDish(e.target.value)}
                            />
                        </div>
                    </div>
                    <ButtonContainer>
                        <SendMessageButton onClick={handleOrderNow}>
                            Send Feedback
                        </SendMessageButton>
                    </ButtonContainer>
                </div>
                <div className="col-lg-4 col-md-4 col-6 orange py-4 pl-4">
                    <p className='ubuntu-medium'>Contact Information</p>
                    <div className='ubuntu-regular text-secondary'>
                        <p className='mb-4'>Thank you for choosing us! Your feedback is incredibly valuable to us, and we genuinely appreciate your reviews. They play a crucial role in helping us enhance our services and provide you with the best experience possible. We look forward to hearing your thoughts!</p>
                        <p className='d-flex align-items-center'><LocationOnIcon />10/634 Indira Nagar, Lucknow.</p>
                        <p className='d-flex align-items-center'><LocalPhoneIcon />+91 8577047704</p>
                        <p className='d-flex align-items-center'><MailIcon className='mr-1' />dalalaslko@gmail.com</p>
                    </div>
                </div>
            </div>
        </ContactComponent>
    );
}

const ContactComponent = styled.div`
    position: absolute;
    height: 80vh;
    width: 100vw;
    top: 12vh;

    .fullHeight {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .orange {
        border-left: 1px solid #c0bfbf;
        background-color: white;

        @media(max-width: 768px) {
            p {
                font-size: 12px;
            }
        }
    }
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
`;

const SendMessageButton = styled.button`
    padding: 10px 20px;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: darkorange;
    }
`;

export default Contact;
