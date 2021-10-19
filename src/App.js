
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
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
      <Route path='/pricing'>
        <Pricing></Pricing>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
     </Switch>
     <Route path='/footer'>
     <Footer></Footer>
     </Route>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
