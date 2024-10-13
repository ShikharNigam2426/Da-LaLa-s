const Menu = [
  {
    name: 'Chicken Curry',
    rating: '4.5',
    numberOfPeopleRated: '150',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '12.99',
    category: '1', // Non-Veg
    desc: 'A rich and spicy curry made with tender chicken and bold spices.',
  },
  {
    name: 'Beef Stroganoff',
    rating: '4.7',
    numberOfPeopleRated: '120',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '14.99',
    category: '1', // Non-Veg
    desc: 'Tender beef cooked in a creamy mushroom sauce, served hot.',
  },
  {
    name: 'Pasta Alfredo',
    rating: '4.6',
    numberOfPeopleRated: '130',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '11.99',
    category: '2', // Veg
    desc: 'Pasta tossed in a creamy Alfredo sauce with herbs and cheese.',
  },
  {
    name: 'Vegetable Stir Fry',
    rating: '4.3',
    numberOfPeopleRated: '140',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '10.99',
    category: '2', // Veg
    desc: 'A healthy mix of vegetables stir-fried in a savory sauce.',
  },
  {
    name: 'Chicken Caesar Salad',
    rating: '4.4',
    numberOfPeopleRated: '110',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '9.99',
    category: '1', // Non-Veg
    desc: 'Grilled chicken over fresh lettuce, topped with Caesar dressing.',
  },
  {
    name: 'Margherita Pizza',
    rating: '4.8',
    numberOfPeopleRated: '180',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '13.99',
    category: '2', // Veg
    desc: 'A classic pizza with fresh mozzarella, basil, and tomato sauce.',
  },
  {
    name: 'Spaghetti Bolognese',
    rating: '4.6',
    numberOfPeopleRated: '150',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '12.49',
    category: '1', // Non-Veg
    desc: 'Hearty spaghetti topped with a rich, slow-cooked meat sauce.',
  },
  {
    name: 'Paneer Tikka',
    rating: '4.5',
    numberOfPeopleRated: '160',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '11.49',
    category: '2', // Veg
    desc: 'Paneer marinated in spices and grilled to perfection on skewers.',
  },
  {
    name: 'Chicken Tandoori',
    rating: '4.7',
    numberOfPeopleRated: '140',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '15.99',
    category: '1', // Non-Veg
    desc: 'Juicy, marinated chicken grilled with a flavorful tandoori spice blend.',
  },
  {
    name: 'Vegetable Samosas',
    rating: '4.4',
    numberOfPeopleRated: '130',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '8.99',
    category: '2', // Veg
    desc: 'Crispy pastry pockets filled with spiced potatoes and green peas.',
  },
  {
    name: 'Mixed Grill Platter',
    rating: '4.9',
    numberOfPeopleRated: '100',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '17.99',
    category: '3', // Combo
    desc: 'An assorted platter of grilled meats and veggies with sauces.',
  },
  {
    name: 'Falafel Wrap',
    rating: '4.6',
    numberOfPeopleRated: '120',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '9.49',
    category: '2', // Veg
    desc: 'Crispy falafel wrapped with fresh vegetables and tahini sauce.',
  },
  {
    name: 'BBQ Ribs',
    rating: '4.8',
    numberOfPeopleRated: '140',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '16.99',
    category: '1', // Non-Veg
    desc: 'Slow-cooked ribs glazed with a smoky barbecue sauce.',
  },
  {
    name: 'Greek Salad',
    rating: '4.3',
    numberOfPeopleRated: '110',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '10.49',
    category: '2', // Veg
    desc: 'Fresh cucumbers, tomatoes, olives, and feta tossed with dressing.',
  },
  {
    name: 'Chicken Shawarma',
    rating: '4.7',
    numberOfPeopleRated: '130',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '12.49',
    category: '1', // Non-Veg
    desc: 'Shaved chicken with garlic sauce, served in pita with fresh veggies.',
  },
  {
    name: 'Chana Masala',
    rating: '4.4',
    numberOfPeopleRated: '150',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '10.99',
    category: '2', // Veg
    desc: 'A spicy chickpea curry served with rice or naan for a fulfilling meal.',
  },
  {
    name: 'Lamb Kofta',
    rating: '4.6',
    numberOfPeopleRated: '120',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '13.49',
    category: '1', // Non-Veg
    desc: 'Grilled lamb skewers served with pita and a refreshing tzatziki dip.',
  },
  {
    name: 'Vegetarian Chili',
    rating: '4.5',
    numberOfPeopleRated: '140',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '11.49',
    category: '2', // Veg
    desc: 'Hearty chili packed with beans and vegetables, seasoned perfectly.',
  },
  {
    name: 'Seafood Paella',
    rating: '4.8',
    numberOfPeopleRated: '160',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '18.99',
    category: '1', // Non-Veg
    desc: 'A flavorful rice dish with saffron, seafood, and vegetables.',
  },
  {
    name: 'Mushroom Risotto',
    rating: '4.7',
    numberOfPeopleRated: '150',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '12.99',
    category: '2', // Veg
    desc: 'Creamy risotto made with fresh mushrooms and parmesan cheese.',
  },
  {
    name: 'Chicken Quesadilla',
    rating: '4.6',
    numberOfPeopleRated: '130',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '11.49',
    category: '1', // Non-Veg
    desc: 'Grilled chicken and melted cheese stuffed into a crispy tortilla.',
  },
  {
    name: 'Vegetable Sushi Rolls',
    rating: '4.5',
    numberOfPeopleRated: '120',
    image: './assets/image/MenuImages/chikencurry.webp',
    price: '13.49',
    category: '2', // Veg
    desc: 'Fresh sushi rolls with crisp vegetables, served with soy sauce.',
  }
];

export default Menu;
