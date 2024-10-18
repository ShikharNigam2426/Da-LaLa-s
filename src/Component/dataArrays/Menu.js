const Menu = [
  {
    "name": "French Fries",
    "half": 120,
    "full": 230,
    "description": "Crispy golden fries, lightly salted and served hot.",
    "category": "Starters",
    "image": "https://imgs.search.brave.com/LnFEK3lm1FdmNL5kAuk3LC5e0u5g_lQufe8WNOHQTFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MTU2MzU5L3Bob3Rv/L2ZyZW5jaC1mcmll/cy13aXRoLWtldGNo/dXAuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUtxd3pISnlf/Qm13NWVYWkxTUFll/clNqWnJ2S09MNjhZ/cGE1RlJJTm02OXc9"
  },
  {
    "name": "Peri Peri French Fries",
    "half": 140,
    "full": 240,
    "description": "Spicy peri peri coated fries with a tangy seasoning.",
    "category": "Starters",
    "image": "https://imgs.search.brave.com/fmuMLaK7k1zqMRwpvAorUqFh588-VIUX-hcgjkORA2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNw/bGFzaG9mdGFzdGUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA1L3Blcmkt/cGVyaS1mcmllcy03/LTc2OHgxMDI0Lmpw/Zw"
  },
  {
    "name": "Paneer Tikka",
    "half": 170,
    "full": 290,
    "description": "Grilled paneer cubes marinated with spices and yogurt.",
    "category": "Starters",
    "image": "https://media.gettyimages.com/id/1334104009/photo/paneer-tikka-with-mint-chutney-and-onion-rings.jpg?s=612x612&w=0&k=20&c=w9jEH7tV7xPumzxEsRm1r4rHQqWr23GlzK_R0Y0GTHg="
  },
  {
    "name": "Veg Shami Kebab",
    "half": 100,
    "full": 190,
    "description": "Vegetarian kebabs made with lentils and spices.",
    "category": "Starters",
    "image": "https://media.istockphoto.com/id/1456235385/photo/vegetable-pakora-or-shami-kabab-tikki-with-chutney-sauce-and-dip-served-in-dish-isolated-on.jpg?s=612x612&w=0&k=20&c=-da9LBr1tWd_m7snpL2oUZ3L6zXmYRjme5IbA1mWJ9E="
  },
  {
    "name": "Tandoori Aloo",
    "half": 120,
    "full": 230,
    "description": "Char-grilled baby potatoes marinated in a spiced yogurt mix.",
    "category": "Starters",
    "image": "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-tandoori-aloo.jpg"
  },
  {
    "name": "Lalaji's Special Resha Kebab",
    "half": 150,
    "full": 290,
    "description": "Unique shredded kebab with signature spices.",
    "category": "Starters",
    "image": "https://imgs.search.brave.com/QRAIPnQoDqeqm1eSB5lf0qbO7VudjOfRw6gDCT5dSXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/MzU0MDQ5L3Bob3Rv/L2tlYmFiLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13QUlI/aWhQQThPX3pkaWxo/UGdtZVVWaGlwTlJH/dk0tbERYX0d5ZnJT/ZldBPQ"
  },
  {
    "name": "Mutton Shami Kebab",
    "half": 150,
    "full": 290,
    "description": "Rich mutton kebabs prepared with lentils and spices.",
    "category": "Starters",
    "image": "https://imgs.search.brave.com/QJXQka5VLnzD9IHuePHFg3u8jDa-vqz2pEnz0Ach_C4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaW5m/dWxseXNwaWN5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNC8zLTIuanBn"
  },
  {
    "name": "Chicken Tikka",
    "half": 150,
    "full": 290,
    "description": "Juicy grilled chicken pieces marinated with Indian spices.",
    "category": "Starters",
    "image": "https://imgs.search.brave.com/WepcE5NFXYCiEvB9SCqOCrURsiW5An0PhKkhhXgL124/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzMzLzA0LzAy/LzM2MF9GXzMzMzA0/MDI1OV9YQW5nQ2ZW/TVZybVpiSlhEM2Zx/SDREVmhNYVRLN0ti/Vi5qcGc"
  },
  {
    "name": "Chicken Roasted",
    "half": 150,
    "full": 290,
    "description": "Roasted chicken seasoned with herbs and spices.",
    "category": "Starters",
    "image": "https://imgs.search.brave.com/LDC6lHqk5CxNyrDIKZ1jqNnf5lZb3fm7JSX5QpyAO1I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ncmlsbGVkLXJv/YXN0ZWQtd2hvbGUt/Y2hpY2tlbl84OTgx/Ni0xODg3NS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"
  },
  {
    "name": "Paneer Masala Roll",
    "price": 80,
    "description": "Delicious roll with spicy paneer filling wrapped in a paratha.",
    "category": "Rolls",
    "image": "https://imgs.search.brave.com/miSXBp5eyF84pECb4qoMkQH8u9vE-FJ2kNaB7M2v6S0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LmZvb2R2aXZhLmNv/bS9zdGF0aWMtY29u/dGVudC9mb29kLWlt/YWdlcy9raWRzLXJl/Y2lwZXMvcGFuZWVy/LXJvbGwtcGFuZWVy/LXdyYXAtcmVjaXBl/L3BhbmVlci1yb2xs/LXBhbmVlci13cmFw/LXJlY2lwZS5qcGc"
  },
  {
    "name": "Paneer Butter Masala Roll",
    "price": 90,
    "description": "Butter paneer wrapped in a soft roll, perfect for snacks.",
    "category": "Rolls",
    "image": "https://ministryofcurry.com/wp-content/uploads/2019/10/paneer-kathi-rolls-1.jpg"
  },
  {
    "name": "Egg Roll",
    "price": 70,
    "description": "Classic egg roll with onions and green chilies.",
    "category": "Rolls",
    "image": "https://imgs.search.brave.com/ZXmSgX58Li3SnYWaszVIuwM5h1iWX9QRQgKS7CPXpPg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzIxLzUyLzE5/LzM2MF9GXzYyMTUy/MTkzMl9GTWNwdVdv/YVhPNzZueDBXUUs1/Ukp6MFR2TTBVR0RI/Si5qcGc"
  },
  {
    "name": "Chicken Masala Roll",
    "price": 90,
    "description": "Spicy chicken filling rolled in a soft paratha.",
    "category": "Rolls",
    "image": "https://imgs.search.brave.com/MmNgb1hRi4hh_JqWZDwfM8RB_1ewY83CeI5Uc9KkFDU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9taW5p/c3RyeW9mY3Vycnku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA1L2NoaWNr/ZW4ta2F0aGktcm9s/bHNfLTItODUweDEy/NzUuanBn"
  },
  {
    "name": "Butter Chicken Roll",
    "price": 90,
    "description": "Creamy butter chicken wrapped in a warm roll.",
    "category": "Rolls",
    "image": "https://imgs.search.brave.com/-uAArvHjIgh-TFkoSI_1bEdZChxqX4-Dk34t9CpvHQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzAyL2NoaWNrZW4t/a2F0aGktcm9sbC53/ZWJw"
  },
  {
    "name": "Mutton Bhuna Roll",
    "price": 100,
    "description": "Flavorful mutton bhuna served as a handheld roll.",
    "category": "Rolls",
    "image": "https://imgs.search.brave.com/fLuQ38Ie-AgHkzRSmmvHPjVpJllb_t4Z7BMzMeLZEPI/rs:fit:500:0:0:0/g:ce/aHR0cDovL3NwaWN5/d29ybGQuaW4vcmVj/aXBlaW1hZ2VzL2Jo/dW5hLWNoaWNrZW4t/cm9sbC05OTdkNzRm/YS1lNGRjLTRlNGMt/OTkxMi1hNTZiNGE4/MzJlZjEuanBn"
  },
  {
    "name": "Boiled Chicken with Salad",
    "half": 120,
    "full": 240,
    "description": "Healthy boiled chicken served with a fresh salad.",
    "category": "Gym Freaks",
    "image": "https://www.simplyrecipes.com/thmb/w9vQRolHr86DzWQF6zpDPit4bCo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Chicken-Salad-LEAD-1-e282629aeae54c198b8225819d3c4387.jpg"
  },
  {
    "name": "Air Fried Peri Peri Chicken",
    "half": 130,
    "full": 260,
    "description": "Crispy air-fried chicken with a spicy peri peri kick.",
    "category": "Gym Freaks",
    "image": "https://sweetcsdesigns.com/wp-content/uploads/2021/01/air-fryer-piri-piri-chicken-recipe-picture-768x1152.jpg"
  },
  {
    "name": "Chicken Breast with Tandoori Sauce",
    "half": 140,
    "full": 280,
    "description": "Grilled chicken breast served with flavorful tandoori sauce.",
    "category": "Gym Freaks",
    "image": "https://thewoksoflife.com/wp-content/uploads/2016/06/grilled-tandoori-chicken-11.jpg"
  },
  {
    "name": "Air Fried Peri Peri Paneer",
    "half": 120,
    "full": 240,
    "description": "Spicy air-fried paneer, a healthy delight.",
    "category": "Gym Freaks",
    "image": "https://www.cookwithkushi.com/wp-content/uploads/2021/10/IMG_3360d-1.jpg"
  },
  {
    "name": "Paneer Butter Masala",
    "half": 160,
    "full": 290,
    "description": "Paneer cubes cooked in a rich tomato-based butter sauce.",
    "category": "Veg Main Course",
    "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg"
  },
  {
    "name": "Dal Makhani",
    "half": 120,
    "full": 210,
    "description": "Slow-cooked black lentils in a creamy, buttery gravy.",
    "category": "Dal & Dry Veg",
    "image": "https://imgs.search.brave.com/_kWeLyx2NtRP2K9C9U34kefygcFRlq6lEl2WZ5lTit8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95dW1teS1kYWwt/bWFraGFuaS1pc29s/YXRlZC13aGl0ZS1i/YWNrZ3JvdW5kXzc4/NzI3My03NzYxMC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
  },
  {
    "name": "Chicken Biryani",
    "half": 180,
    "full": 350,
    "description": "Aromatic rice dish layered with spiced chicken and herbs.",
    "category": "Rice",
    "image": "https://imgs.search.brave.com/ZJnTMKmxepyNCsxzbNFJu7dgNyijAGz0wEBTHJMhcZ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9taW5p/c3RyeW9mY3Vycnku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA1L2NoaWNr/ZW4tYmlyeWFuaV8t/MS04NTB4MTI3NS5q/cGc"
  },
  {
    "name": "Tandoori Roti",
    "price": 20,
    "description": "Traditional Indian flatbread cooked in a clay oven.",
    "category": "Breads",
    "image": "https://imgs.search.brave.com/J7D2_P-iR8kBRU02NshbQVjmXcR7paf92t4KSUf8MqI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQxL1RhbmRvb3Jp/X1JvdGkuSlBHPzIw/MTUwNjE1MTc0MzE3"
  }
]

export default Menu;
