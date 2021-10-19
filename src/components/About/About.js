import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import './About.css'
const About = () => {
    const [image, setImage] = useState([])
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/farakib/fakedata-for-assignment10/main/about.json')
        .then(res => res.json())
        .then(data => setImage(data));
    }, [])
    return (
        <div className="about-section row p-5">
            <div className="col-md-6 col-sm-12">
                <img src={image.img} alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
                <h1>ABOUT ME</h1>
                <p>You’ll look at graphs and charts in Task One, how to approach 
                    the task and the language needed for 
                    a successful answer. You’ll examine Task Two questions and 
                    learn how to plan, write and check academic essays.

                    Task One, how to approach the task and the language needed for
                     a successful answer.
                    You’ll examine Task Two questions and learn how to plan, write
                     and check academic essays.</p>
                     <Button>Services</Button>
            </div>
        </div>
    );
};

export default About;