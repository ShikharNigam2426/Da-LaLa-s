import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For navigation to cart

const Checkout = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
    });

    const items = useSelector((state) => state.cart.basket);
    const [delivery, setDelivery] = useState(0);
    
    // Calculate total amount
    const totalAmount = items.reduce((acc, item) => acc + item.price, 0); // Updated to consider quantity
    const navigate = useNavigate(); // React Router hook for navigation

    // Handle order confirmation and WhatsApp message preparation
    const handleOrderNow = () => {
        const phoneNumber = "+918577047704";
        const baseUrl = `https://wa.me/${phoneNumber}?text=`;

        let message = `\n*Name*: ${formData.fullName}`;
        message += `\n*Address*: ${formData.address}`;
        message += `\n*Payment Mode*: Online Payment\n*Order Details*:\n`;

        items.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - ₹${item.price} x ${item.quantity}\n`;
        });

        message += `\n*Subtotal*: ₹${totalAmount}`;
        message += `\n*Delivery Charges*: As per applicable`;
        message += `\n*Total*: ₹${totalAmount + delivery}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`${baseUrl}${encodedMessage}`, '_blank');
    };

    // Navigate to the cart page
    const handleCartClick = () => {
        navigate('/cart'); // Redirect to cart page
    };

    // Handle input changes for form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Prevent default form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order placed successfully!'); // Confirmation message
        handleOrderNow(); // Proceed to order now after confirmation
    };

    return (
        <CheckoutContainer>
            <CheckoutWrapper>
                <form onSubmit={handleSubmit}>
                    <h2>Checkout</h2>

                    <FormGroup>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="address">Address</Label>
                        <TextArea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            required
                        />
                    </FormGroup>

                    <PaymentInfo>*Payment Mode: Only online payment is accepted.*</PaymentInfo>

                    <ButtonContainer>
                        <CartButton type="button" onClick={handleCartClick}>
                            Cart
                        </CartButton>
                        <FinishButton type="submit">
                            Finish Order
                        </FinishButton>
                    </ButtonContainer>
                </form>
            </CheckoutWrapper>
        </CheckoutContainer>
    );
};

// Styled Components
const CheckoutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #f3f4f6, #e3e6e8);
    padding: 20px;
`;

const CheckoutWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 12px;

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #444;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
    color: #333;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    resize: vertical;
    transition: 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const PaymentInfo = styled.p`
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin: 15px 0;
    color: #444;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CartButton = styled.button`
    flex: 1;
    padding: 15px;
    font-size: 1.2rem;
    background-color: transparent;
    color: orange;
    border: 1px solid orange;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: orange;
        color: white;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const FinishButton = styled.button`
    flex: 1;
    padding: 15px;
    font-size: 1.2rem;
    color: white;
    background-color: orange;
    border: 1px solid orange;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export default Checkout;
