import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cart/cartSlice';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';

const CartItem = () => {
    const items = useSelector((state) => state.cart.basket);
    const [totalAmount, setTotalAmount] = useState(0);
    const dispatch = useDispatch();

    const RemoveItem = (item) => {
        dispatch(removeFromCart(item.name));
    };

    // Calculate total amount whenever items change
    useEffect(() => {
        const newTotal = items.reduce((acc, item) => acc + item.price, 0);
        setTotalAmount(newTotal);
    }, [items]);


    // const handleOrderNow = () => {
    //     const phoneNumber = "+919935894482";
    //     const baseUrl = `https://wa.me/${phoneNumber}?text=`;

    //     let message = "Order Details:\n\n";
    //     items.forEach((item, index) => {
    //         message += `${index + 1}. ${item.name} - ₹${item.price} x ${item.quantity}\n`;
    //     });
    //     message += `\nSubtotal: ₹${totalAmount}`;
    //     message += `\nDelivery Charges: ₹${delivery}`;
    //     message += `\nTotal: ₹${totalAmount + delivery}`;

    //     const encodedMessage = encodeURIComponent(message);

    //     window.open(`${baseUrl}${encodedMessage}`, '_blank');
    // };

    return (
        <CartWrapper>
            <Header>
                <h2>
                    Shopping Cart <span>({items.length} {items.length === 1 ? 'item' : 'items'} in your cart)</span>
                </h2>
            </Header>

            <CartContent>
                <div className="row w-100 my-2">
                    <div className="col-3 none d-flex align-items-center">
                        {/* Name */}
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 row d-flex justify-content-between" style={{ 'marginLeft': '9px' }}>
                        <InfoBlock className=' col-5 align-items-center'>
                            <h4 style={{ 'margin': '0' }}>Name</h4>
                        </InfoBlock>
                        <InfoBlock className=' col-4 align-items-center'>
                            <h4 style={{ 'margin': '0' }}>Category</h4>
                        </InfoBlock>
                        <InfoBlock className=' col-3 align-items-center'>
                            <h4 style={{ 'margin': '0' }}>Price</h4>
                        </InfoBlock>
                    </div>
                </div>
                {items.map((item) => (
                    <CartRow key={item.id}>
                        <div className="row w-100 my-2 itemRow">
                            <div className="col-lg-3 imageDiv col-md-3 col-sm-3 col-12 mb-2 d-flex justify-content-center align-items-center">
                                <img src={item.image} alt="" className="itemImage" />
                            </div>
                            <div className="col-lg-9  col-md-9 col-sm-9 col-12 d-flex justify-content-between">
                                <div className="row w-100">
                                    <InfoBlock className='col-6'>
                                        <p className="value  d-flex align-items-center justify-content-center">{item.name}</p>
                                    </InfoBlock>
                                    <InfoBlock className='col-3'>
                                        <p className="value  d-flex align-items-center justify-content-center">{item.quantity}</p>
                                    </InfoBlock >
                                    <InfoBlock className='col-3 flex-row'>
                                        <div className="d-flex flex-column justify-content-center">
                                            <p className="value mr-lg-5 mr-md-3 mr-1">₹{item.price}</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <ClearIcon className='icon' onClick={() => RemoveItem(item)} />
                                        </div>
                                    </InfoBlock>
                                </div>
                            </div>
                        </div>
                    </CartRow>
                ))}
            </CartContent>

            <OrderSummary>
                <p>Delivery Charges: <span className='text-dark'>As per applicable*</span></p>
                <p>Order total: <strong className='text-dark'>₹{totalAmount}</strong></p>
            </OrderSummary>

            <Actions>
                <Link to='/Menu'>
                    <button className="btn orangeButton">Continue Shopping</button>
                </Link>
                <Link to={'/Cart/Checkout'}>
                    <button className="btn orderButton" >Proceed to order</button>
                </Link>
            </Actions>
        </CartWrapper>
    );
};

// Styled Components
const CartWrapper = styled.div`
    color: black;
    width: 100%;
    padding: 20px;
    
    p{
        margin: 0;
        padding: 0;
        color: #484848a3;
    }

    .icon{
        color: black;
    }
`;

const Header = styled.div`
    text-align: left;
    margin-bottom: 20px;

    h2 {
        font-weight: 700;
        font-size: 1.5rem;
    }

    span {
        font-weight: 400;
        color: #6c757d;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1.2rem;
        }

        span {
            font-size: 0.9rem;
        }
    }
`;

const CartContent = styled.div`
    background-color: #b2b0b00f;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;

    .itemImage {
        width: 75%;
    height: 100%;
    object-fit: inherit;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    }

    .imageDiv{
            height: 22vh;
        }

    @media (max-width: 768px) {
        .imageDiv{
            height: 15vh;
        }
        .itemImage{
            object-fit: fill;
        width: 45% !important;
        height: 100% !important;
        }
        h4{
            font-size: 15px;
        }
    }
    @media (max-width: 425px) {
        h4{
            font-size: 12px;
        }
    }
`;

const CartRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    padding: 10px 0;

    &:last-child {
        border-bottom: none;
    }
`;

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .label {
        font-size: 1rem;
        color: gray;
    }

    .value {
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        .label {
            font-size: 0.9rem;
        }

        .value {
            font-size: 12px;
        }
    }
    @media (max-width: 425px) {
        .label {
            font-size: 0.9rem;
        }

        .value {
            font-size: 10px;
        }
    }
`;

const OrderSummary = styled.div`
    margin-bottom: 20px;

    p {
        font-size: 1.2rem;
        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`;

const Actions = styled.div`
    display: flex;
    gap: 10px;

    button {
        padding: 10px 20px;
        font-size: 1rem;
        border-radius: 4px;
    }

    .orderButton {
        background-color: orange;
        color: white;
        border: 1px solid orange;
    }

    .orangeButton {
        background-color: transparent;
        color: orange;
        border: 1px solid orange;
    }

    .orangeButton:hover {
        background-color: orange;
        color: white;
    }

    @media (max-width: 768px) {
        button {
            font-size: 0.9rem;
            padding: 8px 16px;
        }
    }
`;

export default CartItem;
