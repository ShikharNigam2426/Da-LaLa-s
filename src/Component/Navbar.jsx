import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './fonts.css';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!isMobileMenuVisible);
    };

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });

        if (isMobileMenuVisible) {
            gsap.set('.mobileMenu', { display: 'flex', y: '-100%' }); // Set initial position
            tl.to('.mobileMenu', {
                y: '0%',
                duration: 0.6,
                ease: 'power2.out',
            })
            .from('.mobileNavHeading', {
                x: '-50px',
                duration: 0.6,
                opacity: '0',
                ease: 'power2.out',
                stagger: 0.3,
            });
            
            tl.play();
        } else {
            tl.to('.mobileMenu', {
                y: '-100%',
                duration: 0.6,
                ease: 'power2.in',
                onComplete: () => gsap.set('.mobileMenu', { display: 'none' }), // Hide menu after animation
            });
            tl.play();
        }

    }, [isMobileMenuVisible]);

    return (
        <NavbarParent>
            <NavComponent className='ubuntu-regular'>
                <div className="left">
                    <img src="./assets/image/logo.jpg" alt="" className="logo" />
                </div>
                <div className="middle">
                    <input className='searchArea' type="text" placeholder='Search your hunger' />
                    <div className='searchIcon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                </div>
                <div className="right d-flex flex-row">
                    <p className="item nav-item dropdown my-0 py-0 px-2">
                        <p className="nav-link dropdown-toggle py-0 px-2 my-0" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu
                        </p>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item py-2" href="/">Non Vegetarian</a>
                            <a className="dropdown-item py-2" href="/">Vegetarian</a>
                        </div>
                    </p>
                    <p className='item my-0'>Blog</p>
                </div>
                <img className='hamburger' src="./assets/image/hamburger.png" alt="" onClick={toggleMobileMenu} />
            </NavComponent>

            <MobileMenu className={isMobileMenuVisible ? 'mobileMenu' : 'mobileMenu hidden'}>
                <h1 className='mobileNavHeading'>Menu</h1>
                <h1 className='mobileNavHeading'>Blog</h1>
                <h1 className='mobileNavHeading'>Contact Us</h1>
                <h1 className='mobileNavHeading'>Home Delivery</h1>
            </MobileMenu>
        </NavbarParent>
    );
}

const NavbarParent = styled.div`
    position: relative;
    width: 100%;
`;

const MobileMenu = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background: orange;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 2;
    visibility: visible; // Ensure visibility for animation

    .mobileNavHeading{
        opacity: 1;
    }

    &.hidden {
        display: none;
    }

    h1 {
        color: black;
        padding: 1rem;
        font-size: 2.5rem;
    }

    @media (max-width: 768px){
        display: flex; // Ensure it's flex on mobile
    }
`;

const NavComponent = styled.div`
    background-color: orange;
    height: 12vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    position: fixed;
    z-index: 3;

    .logo{
        width: 60px;
    }

    .hamburger{
        display: none;
    }

    .middle{
        position: relative;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .searchIcon{
        position: absolute;;
        margin-right: 1rem;
    }

    .right{
        display: flex;
    }

    .dropdown-menu{
        border-radius: 10px;
        overflow: hidden;
    }

    .searchArea{
        width: 100%;
        background-color: transparent;
        padding: 10px;
        border: 0.1px solid black;
        border-radius: 10px;
        color: white;
    }

    input::placeholder{
        color: #656464;
    }

    .item{
        font-size: 1.3rem;
    }

    @media (max-width: 768px){
        height: 10vh;
        .middle{
            display: none !important;
        }

        .right{
            display: none !important;
        }

        .hamburger{
            display: block;
            cursor: pointer;
            width: 50px;
        }
    }
`;

export default Navbar;
