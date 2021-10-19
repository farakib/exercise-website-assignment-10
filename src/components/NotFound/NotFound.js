import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    const[notFound, setNotFound]= useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/farakib/fakedata-for-assignment10/main/notFound.json')
        .then(res => res.json())
        .then(data => setNotFound(data));
    }, [])
    return (
        <div className="not-found">
            <img src={notFound.img} alt="" />
            <br />
            <Link to='/home'><Button>GO BAAACK</Button></Link>
        </div>
    );
};

export default NotFound;