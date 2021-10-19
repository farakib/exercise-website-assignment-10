
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
const Login = () => {
const {signInUsingGoogle} = useAuth();



    return (
        <div>
    <Container className="login">
    <h1>Please Login First</h1>
    <form>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div>
           <button type="submit" className="btn btn-primary mb-3">Sign in</button><br />
            <button className="btn btn-primary" onClick={signInUsingGoogle}>Sign in With Google</button>
        </div>
  
</form>
        

        <p>new to account?<br /><Link to='/register'><button>register</button></Link></p>
        </Container>
        </div>
    );
};

export default Login;