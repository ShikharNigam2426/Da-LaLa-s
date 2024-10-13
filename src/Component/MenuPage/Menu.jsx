import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import '../fonts.css';
import MenuArray from '../dataArrays/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState('1');
  const dispatch = useDispatch();

  // Function to handle category click
  const handleCategoryClick = (id) => {
    setCurrentMenu(id);
  };

  const AddToCart = async(image, name, price, desc) => {
    const product = {
      image: image,
      name: name,
      price: price,
      desc: desc,
    }

    // console.log(product);
    console.log('in jsx');
    
    await dispatch(addItem({
      product,
    }));
  }

  // Filter menu items based on currentMenu category
  const filteredMenu = MenuArray.filter(item => item.category == currentMenu);

  // GSAP animation on cards
  useEffect(() => {
    gsap.fromTo('.menu-card', {
      translateY: '-50px',  // Start position
      opacity: 0,
  }, {
      translateY: '0px',   // End position
      opacity: 1,
      duration: 1,
      stagger: 0.2,
  });
  }, [currentMenu]); // Re-run animation when currentMenu changes

  return (
    <MenuComponent className='ubuntu-bold row'>
      <Categories className='col-2 d-flex flex-column'>
        <CategoryButton
          className='my-2'
          id='1'
          isActive={currentMenu === '1'}
          onClick={() => handleCategoryClick('1')}
        >
          NonVeg
        </CategoryButton>
        <CategoryButton
          className='my-2'
          id='2'
          isActive={currentMenu === '2'}
          onClick={() => handleCategoryClick('2')}
        >
          Veg
        </CategoryButton>
        <CategoryButton
          className='my-2'
          id='3'
          isActive={currentMenu === '3'}
          onClick={() => handleCategoryClick('3')}
        >
          Combo
        </CategoryButton>
        <CategoryButton
          className='my-2'
          id='3'
          isActive={currentMenu === '3'}
          onClick={() => handleCategoryClick('3')}
        >
          Combo
        </CategoryButton>
        <CategoryButton
          className='my-2'
          id='3'
          isActive={currentMenu === '3'}
          onClick={() => handleCategoryClick('3')}
        >
          Combo
        </CategoryButton>
        <CategoryButton
          className='my-2'
          id='3'
          isActive={currentMenu === '3'}
          onClick={() => handleCategoryClick('3')}
        >
          Combo
        </CategoryButton>
        <CategoryButton
          className='my-2'
          id='3'
          isActive={currentMenu === '3'}
          onClick={() => handleCategoryClick('3')}
        >
          Combo
        </CategoryButton>
      </Categories>
      <MenuBoxes className='col-10'>
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item, index) => (
            <MenuBox key={index} className="menu-card">
              <CardContainer>
                <CardImage src={item.image} alt={item.name} />
                <CardContent>
                  <PriceRating>
                    <Rating>{item.name}</Rating>
                    <Price>₹{item.price}</Price>
                  </PriceRating>
                  <Description className='px-3'>
                    <p>{item.desc}</p>
                  </Description>
                  <OrderButton onClick={() => {AddToCart(item.image, item.name, item.price, item.desc)}}>Add to Cart</OrderButton>
                </CardContent>
              </CardContainer>
            </MenuBox>
          ))
        ) : (
          <p>No items to display in this category.</p>
        )}
      </MenuBoxes>
    </MenuComponent>
  );
};

// Styled Components
const MenuBox = styled.div`
  width: 30%;
  max-width: 350px;
  height: auto;
  margin: 1rem;
  display: flex;
  justify-content: center;

  @media(max-width: 768px){
    width: 45%;
    margin: 0.5rem;
  }
`;

const MenuBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;  /* Allow the right column to scroll */
  height: 100vh;  /* Ensure the right side takes up full viewport height */
  padding: 10px;
  background-color: #fff;
  
  @media(max-width: 768px){
    height: auto;
  }
`;

const CategoryButton = styled.div`
  cursor: pointer;
  color: black;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${({ isActive }) => (isActive ? 'orange' : 'transparent')};
  color: ${({ isActive }) => (isActive ? 'black' : 'black')};
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: orange;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Categories = styled.div`
  height: 100vh;  /* Full viewport height */
  position: sticky;  /* Sticks the category menu to the viewport */
  top: 0;  /* Ensure it sticks at the top */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;  /* Add a background color to differentiate */
  
  @media (max-width: 768px) {
    position: static;  /* Disable sticky behavior on smaller screens */
    height: auto;
    margin-top: 0;
  }
`;

const MenuComponent = styled.div`
  position: relative;
  top: 12vh;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media(max-width: 768px){
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: center;
`;

const PriceRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  font-size: 16px;
  color: #555;

  @media (max-width: 768px){
    font-size: 11px;
  }
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;

  @media(max-width: 768px){
    font-size: 12px;
  }
`;

const CardTitle = styled.h5`
  font-size: 20px;
  margin: 10px 0;
  color: #333;
  font-weight: bold;

  @media(max-width: 768px){
    font-size: 14px;
  }
`;

const Description = styled.div`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  color: #777;
  font-size: 14px;

  @media(max-width: 768px){
    font-size: 12px;
  }
`;

const OrderButton = styled.button`
  background-color: transparent;
  color: orange;
  border: 1px solid orange;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #d58b00;
    color: white;
  }

  @media(max-width: 768px){
    font-size: 13px;
  }
`;

export default Menu;
