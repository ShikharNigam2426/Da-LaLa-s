import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import CartItem from './CartItem';

const Cart = () => {
    const CartItems = useSelector((state) => state.cart.basket);
    console.log(CartItems);

    return (
        <CartComponent>
            {(CartItems.length !== 0) ? <CartItem /> :
                < div className='empty'>
                    <img src="./assets/image/Cart/NoFood.jpg" alt="" />
                    <h3>Where is your food? Order now!</h3>
                    <Link className='link my-2' to={'/Menu'}>
                        <button className='btn menu'>Menu</button>
                    </Link>
                </div>
            }
        </CartComponent >
    )
}

const CartComponent = styled.div`
  
  ::-webkit-scrollbar{
    display: none;
  }

  width: 100%;
  position: relative;
  top: 12vh;
  display: flex;
  min-height: 100vh;
  /* overflow: hidden !important; */
  
  
  .empty{
    width: 100%;
    min-height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empty > img{
    margin-bottom: 10px;
    width: 15%;
    border-radius: 50%;
    border: 1px solid black;
  }

  .link{
    width: 10%;
  }

  .menu{
    background-color: transparent;
    border: 2px solid orange;
    border-radius: 10px;
    width: 100%;
    color: black;
  }

  .menu:hover{
    background-color: orange;
    color: white;
  }
`;

export default Cart