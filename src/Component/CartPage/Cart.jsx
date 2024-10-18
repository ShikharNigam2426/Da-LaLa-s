import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartItem from './CartItem';

const Cart = () => {
    const CartItems = useSelector((state) => state.cart.basket);
    console.log(CartItems);

    return (
        <CartComponent>
            {CartItems.length !== 0 ? (
                <CartItem />
            ) : (
                <div className="empty">
                    <img className="emptyImage" src="./assets/image/Cart/NoFood.jpg" alt="No Food" />
                    <h3 className="emptyMessage">Where is your food? Order now!</h3>
                    <Link className="link my-2" to="/Menu">
                        <button className="emptyButton btn menu">Menu</button>
                    </Link>
                </div>
            )}
        </CartComponent>
    );
};

const CartComponent = styled.div`
    ::-webkit-scrollbar {
        display: none;
    }

    width: 100%;
    position: relative;
    top: 12vh;
    display: flex;
    min-height: 100vh;

    .empty {
        width: 100%;
        min-height: 88vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .empty > img {
        margin-bottom: 10px;
        width: 15%;
        border-radius: 50%;
        border: 1px solid black;
    }

    .emptyMessage {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .link {
        width: 10%;
    }

    .menu {
        background-color: transparent;
        border: 2px solid orange;
        border-radius: 10px;
        width: 100%;
        color: black;
        padding: 10px;
        font-size: 1rem;
    }

    .menu:hover {
        background-color: orange;
        color: white;
    }

    /* Responsive Styles for Mobile Devices */
    @media (max-width: 768px) {
        .empty > img {
            width: 25%; /* Increase image size on smaller screens */
        }

        .emptyMessage {
            font-size: 1.2rem; /* Smaller font size for mobile */
            margin-bottom: 8px;
        }

        .link {
            width: 25%; /* Adjust button width for mobile */
        }

        .menu {
            font-size: 0.9rem; /* Adjust font size for button */
            padding: 8px;
        }
    }
`;

export default Cart;
