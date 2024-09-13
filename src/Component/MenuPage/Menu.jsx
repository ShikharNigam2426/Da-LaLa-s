import React, { useState } from 'react';
import styled from 'styled-components';
import '../fonts.css';
import MenuArray from '../dataArrays/Menu';

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState('1');

  // Function to handle category click
  const handleCategoryClick = (id) => {
    setCurrentMenu(id);
  };

  // Filter menu items based on currentMenu category
  const filteredMenu = MenuArray.filter(item => item.category == currentMenu);

  console.log('Filtered Menu:', filteredMenu);

  return (
    <MenuComponent className='ubuntu-bold'>
      <Categories>
        <CategoryButton
          id='1'
          isActive={currentMenu === '1'}
          onClick={() => handleCategoryClick('1')}
        >
          NonVeg
        </CategoryButton>
        <CategoryButton
          id='2'
          isActive={currentMenu === '2'}
          onClick={() => handleCategoryClick('2')}
        >
          Veg
        </CategoryButton>
        <CategoryButton
          id='3'
          isActive={currentMenu === '3'}
          onClick={() => handleCategoryClick('3')}
        >
          Combo
        </CategoryButton>
      </Categories>

      <MenuBoxes>
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item, index) => (
            <MenuBox key={index}>
              <CardContainer>
                <CardImage src={item.image} alt={item.name} />
                <CardContent>
                  <PriceRating>
                    <Rating>{item.rating} ({item.numberOfPeopleRated})</Rating>
                    <Price>${item.price}</Price>
                  </PriceRating>
                  <CardTitle>{item.name}</CardTitle>
                  <Description>
                    <li className='desc'>4 Chicken Legs</li> {/* Customize as per actual description */}
                    <li className='desc'>Chili Sauce</li>
                    <li className='desc'>Soft Drinks</li>
                  </Description>
                  <OrderButton>Order Now</OrderButton>
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
  width: 95%;
  margin-top: 2rem;
`;

const CategoryButton = styled.div`
  cursor: pointer;
  color: black;
  width: 26%;
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
`;

const Categories = styled.div`
  height: 12vh;
  width: 60%;
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 95%;
    height: 8vh;
  }
`;

const MenuComponent = styled.div`
  position: relative;
  top: 12vh;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 768px){
    padding-top: 1vh;
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

const Description = styled.ul`
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
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d58b00;
  }

  @media(max-width: 768px){
    font-size: 13px;
  }
`;

export default Menu;
