import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Service from '../../service/Service';
import './Details.css';
const Details = () => {
    const {serviceId}= useParams();
    

    return (
        <div className="details">
            this is details:{serviceId}
            
        </div>
    );
};

export default Details;