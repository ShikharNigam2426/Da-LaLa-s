import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import '../fonts.css';
import MenuArray from '../dataArrays/Menu';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState('Starters'); // Default category
  const dispatch = useDispatch();

  // Extract unique categories from the MenuArray
  const categories = [...new Set(MenuArray.map((item) => item.category))];

  // Handle category selection
  const handleCategoryClick = (category) => {
    setCurrentMenu(category);
  };

  // Handle adding to cart
  const AddToCart = async (item, portion, price) => {
    const product = {
      image: item.image,
      name: item.name,
      portion,
      price,
      description: item.description,
      quantity: portion,
    };
    if (price === 'Unavailable') {
      alert('This dish is not available');
    }
    else {
      await dispatch(addItem({ product }));
    }
  };

  // Filter menu items based on the selected category
  const filteredMenu = MenuArray.filter((item) => item.category === currentMenu);

  // GSAP animation for menu cards
  useEffect(() => {
    gsap.fromTo(
      '.menu-card',
      { translateY: '-50px', opacity: 0 },
      { translateY: '0px', opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, [currentMenu]);

  return (
    <MenuComponent className="ubuntu-bold row">
      <Categories className="col-2 d-flex flex-column">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            isactive={currentMenu === category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </Categories>

      <MenuBoxes className="col-10">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item, index) => (
            <MenuBox key={index} className="menu-card col-lg-3 col-md-4 col-6 mt-3">
              <DishCard item={item} onAddToCart={AddToCart} />
            </MenuBox>
          ))
        ) : (
          <p>No items to display in this category.</p>
        )}
      </MenuBoxes>
    </MenuComponent>
  );
};

// Component for individual dish cards
const DishCard = ({ item, onAddToCart }) => {
  const [portion, setPortion] = useState('Half'); // Default to 'Half'
  const [price, setPrice] = useState(item.half); // Default to 'Half' price

  // Handle portion size change
  const handlePortionChange = (e) => {
    const selectedPortion = e.target.value;
    setPortion(selectedPortion);

    switch (selectedPortion) {
      case 'Half':
        setPrice(item.half);
        break;
      case 'Full':
        setPrice(item.full);
        break;
      case 'Family':
        if (item.family) {
          setPrice(item.family);
        }
        else {
          setPrice('Unavailable')
        }
        break;
      default:
        setPrice(item.halfPrice);
    }
  };

  return (
    <CardContainer>
      <CardImage src={item.image} alt={item.name} />
      <CardContent>
        <PriceRating>
          <Rating>{item.name}</Rating>
          <Price>₹{price}</Price>
        </PriceRating>
        {
          (item.category === "Breads" || item.category === "Raitas") ? (<></>) : (
            <PortionSelect value={portion} onChange={handlePortionChange}>
              <option value="Half">Half</option>
              <option value="Full">Full</option>
              <option value="Family">Family</option>
            </PortionSelect>
          )
        }
        <Description className="px-3">
          <p>{item.description}</p>
        </Description>
        <OrderButton onClick={() => onAddToCart(item, portion, price)}>Add to Cart</OrderButton>
      </CardContent>
    </CardContainer>
  );
};

// Styled Components
const MenuBox = styled.div`
  width: 30%;
  max-width: 350px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 45%;
  }
`;

const MenuBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  padding: 10px;
  background-color: #fff;
`;

const CategoryButton = styled.div`
  cursor: pointer;
  padding: 15px;
  background-color: ${({ isactive }) => (isactive ? 'orange' : 'transparent')};
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  &:hover {
    background-color: orange;
  }
`;

const Categories = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 1rem;
  background-color: #f5f5f5;
`;

const MenuComponent = styled.div`
  position: relative;
  top: 12vh;
  display: flex;
`;

const CardContainer = styled.div`
  width: 100%;
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
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const PortionSelect = styled.select`
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Description = styled.div`
  color: #777;
  font-size: 14px;
`;

const OrderButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d58b00;
  }
`;

export default Menu;
