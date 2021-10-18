import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {id, title, img, description} = service;
    return (
        <div className="service">
           
           <img src={img} alt="" />
           <h3 className="py-3">{title}</h3>
           <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;