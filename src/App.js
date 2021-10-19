
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details/Details';
import Login from './components/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import Register from './components/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
     <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/services'>
        <Services></Services>
      </Route>
      <PrivateRoute path='/pricing'>
        <Pricing></Pricing>
      </PrivateRoute>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Route path='/register'>
        <Register></Register>
      </Route>

      <PrivateRoute path='/details/:serviceId'>
      <Details></Details>
      </PrivateRoute>
      <Route path='/contact'>
      <Contact></Contact>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
     </Switch>
     <Footer></Footer>
     
    
     </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
