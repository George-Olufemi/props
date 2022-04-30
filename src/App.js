import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Product from './Product';
import Productdetails from './ProductDetails';

function App() {
  const foods = [
    {id: 1, name: 'Rice', price: 20},
    {id: 2, name: 'Youghurt', price: 40},
    {id: 3, name: 'Pizza', price: 90},
    {id: 4, name: 'Burger', price: 50},
    {id: 5, name: 'Pasta', price: 60},
    {id: 6, name: 'Paneer', price: 70},
    {id: 7, name: 'Sandwich', price: 80},
    {id: 8, name: 'Cake', price: 100},
    {id: 9, name: 'Coffee', price: 120},
    {id: 10, name: 'Tea', price: 130},
    {id: 11, name: 'Chips', price: 140},
    {id: 12, name: 'Noodles', price: 150},
    {id: 13, name: 'Fries', price: 160},
    {id: 14, name: 'Soup', price: 170},
    {id: 15, name: 'Chicken', price: 180},
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product foods={foods} />} />
        <Route path="/products/:name/:price" element={<Productdetails foods={foods} />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;