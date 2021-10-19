import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>please register before login</h1>
            <form>
                <input type="text" placeholder="username"></input>
                <br />
                <input type="email" name="" id="" placeholder="Email"/>
               <br />
               <input type="password" name="Password" placeholder="Password"/>
               <br />
               <input onClick="" type="submit" value="register"/>
            </form>
            <p>alredy register?</p><br /><Link to='/login'><button>login</button></Link>
        </div>
    );
};

export default Register;