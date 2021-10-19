
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id, title, img, description} = service;
    return (
        <div className="service">
           
           <img src={img} alt="" />
           <h3 className="py-3">{title}</h3>
           <p className="px-3">{description}</p>
          <Link to={`/details/${id}`}> <button>Details</button></Link>
        </div>
    );
};

export default Service;