import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import '../fonts.css';
import MenuArray from '../dataArrays/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';
import { updateCategory } from '../../redux/category/categorySlice';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Menu = () => {
  // const [currentMenu, setCurrentMenu] = useState('Starters');
  const currentMenu = useSelector((state) => state.category.category);
  console.log(currentMenu);

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const dispatch = useDispatch();

  const categories = [...new Set(MenuArray.map((item) => item.category))];

  const handleCategoryClick = (category) => {
    dispatch(updateCategory({ category }));
    if (window.innerWidth <= 768) setIsCategoriesOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen((prev) => !prev);
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

  const filteredMenu = (currentMenu !== "All") ? (MenuArray.filter((item) => item.category === currentMenu)) : MenuArray;

  useEffect(() => {
    gsap.fromTo(
      '.menu-card',
      { translateY: '-50px', opacity: 0 },
      { translateY: '0px', opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, [currentMenu]);

  useEffect(() => {
    // Example: Close the mobile menu when the route changes
    window.scrollTo(0, 0);
}, [currentMenu]);

  return (
    <MenuComponent className="ubuntu-bold row">
      <CategoriesContainer className='categoryheight col-lg-2 col-md-2 col-sm-12'>
        <CategoryToggle onClick={toggleCategories}>{(isCategoriesOpen) ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} Categories</CategoryToggle>
        <Categories className='categoryColumn' isOpen={isCategoriesOpen} >
          <CategoryButton
            isactive={currentMenu === "All"}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </CategoryButton>
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
        {/* Only render the menuRow if categories are closed */}
        {!isCategoriesOpen && (
          <div className="row menuRow w-100">
            {filteredMenu.length > 0 ? (
              filteredMenu.map((item, index) => (
                <MenuBox key={index} className="menu-card col-lg-3 col-md-4 col-sm-4 col-6">
                  <DishCard currentMenu={currentMenu} item={item} onAddToCart={AddToCart} />
                </MenuBox>
              ))
            ) : (
              <p>No items to display in this category.</p>
            )}
          </div>
        )}
      </MenuBoxes>
    </MenuComponent>
  );
};

const DishCard = ({ currentMenu, item, onAddToCart }) => {
  const [portion, setPortion] = useState('Half');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (currentMenu === "Rolls" || currentMenu === "Breads" || currentMenu === "Raitas" || currentMenu === "Salad" || currentMenu === "Rice Bowl Combo" || currentMenu === "Bread & Curry Combo" || currentMenu === "Non Veg Deluxe Thali" || currentMenu === "Kebab Combo" || currentMenu === "Veg Deluxe Thali" || currentMenu === "Non Veg Deluxe Thali" || currentMenu === "Chinese Combos" || currentMenu === "Soups") {
      setPrice(item.price);
    }
    else if(item.category === "Rolls" || item.category === "Breads" || item.category === "Raitas" || item.category === "Salad" || item.category === "Rice Bowl Combo" || item.category === "Bread & Curry Combo" || item.category === "Non Veg Deluxe Thali" || item.category === "Kebab Combo" || item.category === "Veg Deluxe Thali" || item.category === "Non Veg Deluxe Thali" || item.name === "Chicken Lollipop (5 Pcs)"){
      setPrice(item.price);
    } 
    else {
      switch (portion) {
        case 'Quarter':
          setPrice(item.quarter !== null ? item.quarter : 'Unavailable');
          break;
        case 'Half':
          setPrice(item.half !== null ? item.half : 'Unavailable');
          break;
        case 'Full':
          setPrice(item.full !== null ? item.full : 'Unavailable');
          break;
        case 'Family':
          setPrice(item.family !== null ? item.family : 'Unavailable');
          break;
        default:
          setPrice(item.price !== null ? item.price : item.price);
      }
    }
  }, [currentMenu, portion, item]);

  const handlePortionChange = (e) => {
    setPortion(e.target.value);
  };

  return (
    <CardContainer style={{ overflow: 'hidden' }}>
      <CardImage src={item.image} alt={item.name} />
      <CardContent>
        <PriceRating>
          <Rating className='d-flex align-items-center pr-lg-3 pr-md-3'>{item.name}</Rating>
          <Price>₹{price}</Price>
        </PriceRating>
        {(item.category === 'Breads' || item.category === 'Raitas' || item.category === 'Rolls') ? null : (
          <>
            {(item.quarter === null && item.half === null && item.full === null && item.family === null) ? (
              null
            ) : (
              <PortionSelect value={portion} onChange={handlePortionChange}>
                {item.quarter !== null && <option value="Quarter">Quarter</option>}
                {item.half !== null && <option value="Half">Half</option>}
                {item.full !== null && <option value="Full">Full</option>}
                {item.family !== null && <option value="Family">Family</option>}
              </PortionSelect>
            )}
          </>
        )}
        <Description>
          <p className='desc'>{item.description}</p>
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
  padding-right: 0;
  width: 20%;
  @media (min-width: 769px) {
    width: 20%;
  }

  @media (max-width: 1070px) and (min-width: 768px) {
    font-size: 11px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 9vh;
    z-index: 5;
  }
`;


const Categories = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 1rem;
  

  .categoryColumn {
    position: fixed;
    top: 12vh;
    overflow: scroll;
    width: 15%;
  }

  @media (min-width: 769px) {
    display: block;
    position: fixed;
    top: 12vh;
    overflow-y: scroll;
    width: 15%;
    height: 88vh;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100%;
    position: fixed;
    top: 15vh;
    z-index: 1;
    overflow-y: scroll;
    height: ${({ isOpen }) => (isOpen ? '80vh' : '0vh')};
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

  .menuRow {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin: 6vh auto 6vh auto;
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

  @media (max-width: 1070px) and (min-width: 768px) {
    font-size: 15px;
}

`;

const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #e67e22;

  @media screen {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PortionSelect = styled.select`
  width: 100%;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
  font-size: 15px;
  height: 29px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #777;

  @media (max-width: 768px) {
    .desc{
      font-size: 12px;
    }
  }
`;

const OrderButton = styled.button`
  background: #e67e22;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #d95f1e;
  }
`;

export default Menu;
