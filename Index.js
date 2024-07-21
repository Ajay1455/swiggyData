const express = require('express');
const app = express();
const port = 3000;

const dishes = [
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_dhokla.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kachori.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cutlet.png",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png",
  },
];

const restaurants = [
    {
        "image": "2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
        "offer": "Items at ₹179",
        "title": "Pizza Hut",
        "rating": 4.2,
        "minTime": 30,
        "maxTime": 40,
        "name": "Pizzas",
        "place": "New Jodhpur"
    },
    {
        "image": "75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
        "offer": "₹50 OFF ABOVE ₹199",
        "title": "Janta Sweet Home",
        "rating": 4.5,
        "minTime": 35,
        "maxTime": 40,
        "name": "Sweets,South Indian",
        "place": "Shastri Nagar"
    },
    {
        "image": "cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg",
        "offer": "₹85 OFF ABOVE ₹149",
        "title": "Parihaar Bhojnalay",
        "rating": 4.3,
        "minTime": 35,
        "maxTime": 40,
        "name": "North India, Thalis",
        "place": "Sardarpura"
    },
    {
        "image": "eillc7d7hbrzcuussus5.jpeg",
        "offer": "₹70 OFF ABOVE ₹149",
        "title": "Kwality Walls Frozen",
        "rating": 4.5,
        "minTime": 25,
        "maxTime": 25,
        "name": "Desserts,Ice Cream",
        "place": "Chopsani Housing Board"
    },
    {
        "image": "6e04be27387483a7c00444f8e8241108.jpeg",
        "offer": "₹1-5 OFF ABOVE ₹179",
        "title": "The Good Bowl",
        "rating": 4.4,
        "minTime": 30,
        "maxTime": 35,
        "name": "Biryani, North India",
        "place": "Shastri Nagar"
    },
    {
        "image": "w7ndo1dkkk6kf4qfz2p1.jpeg",
        "offer": "₹100 OFF ABOVE ₹499",
        "title": "NIC Ice Creams",
        "rating": 4.7,
        "minTime": 25,
        "maxTime": 30,
        "name": "Desserts,Ice Cream",
        "place": "Sardarpura"
    },
    {
        "image": "f1bc9ddf53de574cdc35ab2f717df234.jpeg",
        "offer": "Items at ₹109",
        "title": "Dosh Center",
        "rating": 4.0,
        "minTime": 35,
        "maxTime": 40,
        "name": "South Indian",
        "place": "Chopsani Housing Board"
    },
    {
        "image": "919cb3be0e7406f86f6741ebe7c30128.jpeg",
        "offer": "₹125 OFF ABOVE ₹349",
        "title": "Lunch Box - Meals and Thalis",
        "rating": 4.3,
        "minTime": 30,
        "maxTime": 35,
        "name": "Biryani, North India",
        "place": "Shastri Nagar"
    },
    {
        "image": "535fc9f9c135f7982317bbb6a64a1ffc.jpeg",
        "offer": "₹70 OFF ABOVE ₹249",
        "title": "McDonald's",
        "rating": 4.4,
        "minTime": 30,
        "maxTime": 35,
        "name": "American",
        "place": "Rawaton Ka Bass"
    },
    {
        "image": "2a41aa363a8ae1e98a4cce95c2d0c589.jpeg",
        "offer": "₹100 OFF ABOVE ₹449",
        "title": "Kajal's Cake",
        "rating": 4.5,
        "minTime": 35,
        "maxTime": 40,
        "name": "Cake",
        "place": "Chopsani Housing Board"
    }
]

app.use(express.json());

app.get('/', (req, res) => {
  res.send("This is swiggy data api...");
});


app.get('/api/dishes', (req, res) => {
  res.json(dishes);
});

app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
