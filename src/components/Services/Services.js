import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/farakib/fakedata-for-assignment10/main/fakedb.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="service-container">
            
            {
                
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;