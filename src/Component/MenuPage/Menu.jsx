import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import '../fonts.css';
import MenuArray from '../dataArrays/Menu';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState('Starters');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Toggle for mobile
  const dispatch = useDispatch();

  const categories = [...new Set(MenuArray.map((item) => item.category))];

  const handleCategoryClick = (category) => {
    setCurrentMenu(category);
    if (window.innerWidth <= 768) setIsCategoriesOpen(false); // Collapse on selection in mobile
  };

  const toggleCategories = () => {
    setIsCategoriesOpen((prev) => {
      const newState = !prev;
      console.log("Toggle Categories Clicked, New State:", newState);
      return newState;
    });
  };

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
    } else {
      await dispatch(addItem({ product }));
    }
  };

  const filteredMenu = MenuArray.filter((item) => item.category === currentMenu);

  useEffect(() => {
    gsap.fromTo(
      '.menu-card',
      { translateY: '-50px', opacity: 0 },
      { translateY: '0px', opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, [currentMenu]);

  return (
    <MenuComponent className="ubuntu-bold row">
      <CategoriesContainer className='col-lg-2 col-md-2 col-sm-12'>
        <CategoryToggle onClick={toggleCategories}>☰ Categories</CategoryToggle>
        <Categories className='categoryColumn' isOpen={isCategoriesOpen}>
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
      </CategoriesContainer>

      <MenuBoxes className="col-lg-10 col-md-10 col-12 menuItems">
        {filteredMenu.length > 0 ? (
          <div className="row menuRow w-100">
            {filteredMenu.map((item, index) => (
              <MenuBox key={index} className="menu-card col-lg-3 col-md-4 col-sm-4 col-6">
                <DishCard item={item} onAddToCart={AddToCart} />
              </MenuBox>
            ))}
          </div>
        ) : (
          <p>No items to display in this category.</p>
        )}
      </MenuBoxes>
    </MenuComponent>
  );
};

const DishCard = ({ item, onAddToCart }) => {
  const [portion, setPortion] = useState('Half');
  const [price, setPrice] = useState(item.half);

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
        setPrice(item.family || 'Unavailable');
        break;
      default:
        setPrice(item.half);
    }
  };

  return (
    <CardContainer style={{ overflow: 'hidden' }}>
      <CardImage src={item.image} alt={item.name} />
      <CardContent>
        <PriceRating>
          <Rating>{item.name}</Rating>
          <Price>₹{price}</Price>
        </PriceRating>
        {(item.category === 'Breads' || item.category === 'Raitas') ? null : (
          <PortionSelect value={portion} onChange={handlePortionChange}>
            <option value="Half">Half</option>
            <option value="Full">Full</option>
            <option value="Family">Family</option>
          </PortionSelect>
        )}
        <Description>
          <p>{item.description}</p>
        </Description>
        <OrderButton onClick={() => onAddToCart(item, portion, price)}>
          Add to Cart
        </OrderButton>
      </CardContent>
    </CardContainer>
  );
};

// Styled Components
const MenuComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 12vh;

  @media (max-width: 768px) {
    padding-top: 8vh;
  }
`;

const CategoriesContainer = styled.div`
  width: 100%;
  position: relative;
  @media (min-width: 769px) {
    width: 20%;
  }
`;

const CategoryToggle = styled.button`
  background-color: orange;
  color: black;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  display: block;
  font-weight: bold;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 9vh;
    z-index: 5;
  }
`;

const Categories = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 1rem;
  background-color: #f5f5f5;
  height: auto; /* Changed to auto */
  position: sticky;
  top: 0;
  overflow-y: auto;

  .categoryColumn {
    position: fixed;
    top: 12vh;
  }

  @media (min-width: 769px) {
    display: block;
    position: fixed;
    top: 12vh;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Ensure it opens on mobile */
    width: 100%;
    position: fixed;
    top: 14vh;
    z-index: 1; /* Ensure it’s above other elements */
  }
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

const MenuBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  justify-content: center;  

  .menuRow{
    margin: 0px auto;
  }

  @media (max-width: 768px) {
    margin-top: 5vh;

    .menuRow{
      margin: 10px auto;
    }
  }
`;

const MenuBox = styled.div`
  margin: 0.5rem 0;
`;

const CardContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

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
`;

const Rating = styled.div`
  font-size: 18px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const PortionSelect = styled.select`
    width: 100%;
    padding: 5px;
    margin: 10px 0;
    @media (max-width: 768px) {
      height: 25px;
      font-size: 12px;
  }
`;

const Description = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: #777;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const OrderButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: darkorange;
  }

  @media (max-width: 768px){
    background-color: orange;
    color: white;
    border: none;
    padding: 6px 15px;
    cursor: pointer;
    width: 87%;
    border-radius: 8px;
    font-size: 12px;
  }
`;

export default Menu;
