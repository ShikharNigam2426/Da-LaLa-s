import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './fonts.css';
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { updateCategory } from '../redux/category/categorySlice';

const Navbar = (props) => {
    const items = useSelector((state) => state.cart.basket);
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [cartItem, setCartItem] = useState(0);
    const mobileMenuRef = useRef(null);
    const scrollPosition = useRef(0);  // To save scroll position
    const location = useLocation(); // Get current location (route)
    const basket = useSelector((state) => state.cart.basket)
    const currentMenu = useSelector((state) => state.category.category);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!isMobileMenuVisible);
    };

    useEffect(() => {
        // Example: Close the mobile menu when the route changes
        setMobileMenuVisible(false);
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        gsap.fromTo('.animate', {
            translateY: '-50px',  // Start position
            opacity: 0,
        }, {
            translateY: '0px',   // End position
            opacity: 1,
            duration: 1,
            stagger: 0.3,
        });
    }, []);

    useEffect(() => {
        setCartItem(basket.length)
    }, [basket]);

    useEffect(() => {

        const tl = gsap.timeline({ paused: true });

        if (isMobileMenuVisible) {
            scrollPosition.current = window.scrollY; // Save current scroll position
            document.body.style.position = 'fixed';  // Freeze the scroll
            document.body.style.top = `-${scrollPosition.current}px`;  // Prevent moving

            gsap.set(mobileMenuRef.current, { visibility: 'visible', y: '0%' });
            tl.to(mobileMenuRef.current, {
                y: '0%',
                duration: 0.6,
                ease: 'power2.out',
            }).from('.mobileNavHeading', {
                x: '-50px',
                duration: 0.6,
                opacity: '0',
                ease: 'power2.out',
                stagger: 0.3,
            });

            tl.play();
        } else {
            tl.to(mobileMenuRef.current, {
                y: '-100%',
                duration: 0.6,
                ease: 'power2.in',
                onComplete: () => {
                    gsap.set(mobileMenuRef.current, { visibility: 'hidden' });
                    document.body.style.position = '';  // Re-enable scroll
                    document.body.style.top = '';
                    window.scrollTo(0, scrollPosition.current);  // Restore scroll position
                },
            });
            tl.play();
        }

    }, [isMobileMenuVisible]);

    const changeRoute = async (category) => {
        console.log('category changed from: ' + currentMenu);
        dispatch(updateCategory({ category }));
        navigate(`/Menu`);
    }

    return (
        <NavbarParent>
            <NavComponent className=''>
                <div className="left animate">
                    <Link to={`/`}><img src="./assets/image/logo1.png" alt="" className="logo" /></Link>
                </div>
                {/* <div className="middle animate"> */}
                {/* <input className='searchArea' type="text" placeholder='Search your hunger' />
                    <div className='searchIcon animate'><FontAwesomeIcon icon={faMagnifyingGlass} /></div> */}
                {/* </div> */}
                <div className="right d-flex flex-row">
                    <Link className='link animate' to={`/Cart`}>
                        <p className="item my-0 mx-3">Cart({cartItem})</p>
                    </Link>
                    <p className='item my-0 mx-3 link animate' onClick={() => { changeRoute("All") }}>Menu</p>
                    <Link className='link animate' to={`/Blog`}>
                        <p className="item my-0 mx-3">Blog</p>
                    </Link>
                </div>
                <div className='d-flex flex-row align-items-center justify-content-center d-lg-none d-md-none'>
                    <Link to='/Cart' style={{ 'color': 'black', 'textDecorationLine': 'none' }}>
                        <div className='d-flex flex-row align-items-center justify-content-center pr-2'>
                            <ShoppingCartIcon className='' />({items.length})
                        </div>
                    </Link>
                    <img className='hamburger' src="./assets/image/hamburger.png" alt="" onClick={toggleMobileMenu} />
                </div>
            </NavComponent>

            <MobileMenu ref={mobileMenuRef} className="mobileMenu">
                <h1 className='mobileNavHeading' onClick={() => { changeRoute("All") }}>Menu</h1>
                <Link to={'/Cart'}><h1 className='mobileNavHeading'>Cart</h1></Link>
                <Link to={'/Delivery'}><h1 className='mobileNavHeading'>Blog</h1></Link>
                <Link to={'/Contact'}><h1 className='mobileNavHeading'>Contact Us</h1></Link>
            </MobileMenu>
        </NavbarParent>
    );
}

const NavbarParent = styled.div`
    position: relative;
    width: 100%;
`;

const MobileMenu = styled.div`
    visibility: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background: orange;
    position: fixed;  // Change from absolute to fixed
    top: 0;
    right: 0;
    width: 100%;
    z-index: 10;

    .mobileNavHeading{
        opacity: 1;
        text-decoration: none;
    }

    h1 {
        color: black;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    }

    @media (max-width: 768px){
        display: flex;
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

    .animate{
        position: relative;
    }

    .link{
        color: black;
    }

    .logo{
        width: 74px;
    border: 4px solid #ffff0026;
    border-radius: 50%;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3), 0px 6px 20px rgba(0, 0, 0, 0.19);
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
        position: absolute;
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
        text-decoration: none;
        transition: ease all 0.3s;
        cursor: pointer;
    }

    .item:hover{
        color: white;
        transform: translateY(-5px);
    }

    .link:hover{
        text-decoration: none;
    }

    @media (max-width: 768px){
        height: 10vh;
        background-color: orange;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    position: fixed;
    top: 0;
    z-index: 1000;
        .middle{
            display: none !important;
        }

        .right{
            display: none !important;
        }

        .hamburger{
            display: block;
            cursor: pointer;
            width: 35px;
        }
        .logo{
            width: 50px;
        }
    }
`;

export default Navbar;
