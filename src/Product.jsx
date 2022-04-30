import React from 'react';
import Navbar from "./Navbar";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({foods}) {
  return (
    <React.Fragment>
        <Navbar />
        {
            foods.map(food => (
            <Link to={`${food.name}/${food.price}`}>
                <div className="container">
                    <div className="box1">
                        <h1>{food.name}</h1>
                        <p>{food.price}</p>
                    </div>
                </div>
            </Link>
            ))
        }
    </React.Fragment>
  )
}

export default Product;