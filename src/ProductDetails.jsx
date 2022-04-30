import React from 'react';
import { useParams } from "react-router-dom";

const Productdetails = () => {
    const { name, price } = useParams();
  return (
    <div>
        <center>
            <div className="link__content">
                <div className="content1">
                    <h1>{ name }</h1>
                    <p>{ price }</p>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Productdetails; 