import './App.css';
import Home from './Home';
import Products from './Products';
import Footer  from './Footer';
import Product from './Product'
import CheckoutCart from './CheckoutCart';
import Header from './Header';
import About from './About';
import Maill from './Maill';
import {ContextProvider, cartState, reducer } from './ContextProvider'
import {
  BrowserRouter as Router,
  Route
 
} from "react-router-dom";
import Contact from './Contact';

function App() {
  return (
    <ContextProvider reducer={reducer} cartState={cartState}>
    <div>
     
       <Router>
       <Header></Header>
       <Route exact path="/product/:id">
         <Product></Product>
      </Route>
      <Route exact path="/checkoutcart">
         <CheckoutCart></CheckoutCart>
      </Route>
       <Route exact path="/">
         <Home></Home>
      </Route>   
      <Route exact path={"/products"}>
        <Products></Products>
      </Route>  
      <Route exact path={"/about"}>
        <About></About>
      </Route> 
      <Route exact path={"/mails"}>
        <Maill></Maill>
      </Route> 
      <Route exact path={"/contact"}>
        <Contact></Contact>
        </Route>   
      </Router>
      <Footer></Footer>
    </div>
    </ContextProvider>
  );
}

export default App;
