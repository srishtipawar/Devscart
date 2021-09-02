import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Product from "./Product";
import Web from "./Web";
import Cart from "./Cart";
import Game from './Game';
import About from './services/About/About';
import Privacy from './services/privacy/Privacy';
import Accessories from "./Accessories";
import Landing from "./Landing";
import Template from "./Template";
import Home from "./Home";
import StoryReel from "./StoryReel";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/userSlice";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Android from "./Android";

function App() {
  // const username = useSelector(selectUserName);
  const [isLogin, setIslogin] = useState(localStorage.name);
  const [product, setProduct] = useState();
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      {isLogin ? (
        <>
          <Navbar setIslogin={setIslogin} />
          <Switch>
            <Route exact path="/">
              <StoryReel />
              <Home />
              <Template />
            </Route>
            <Route path="/game">
              <Game
                product={product}
                setProduct={setProduct}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Route>
            <Route path="/web">
              <Web
                product={product}
                setProduct={setProduct}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Route>
            <Route path="/and">
              <Android
                product={product}
                setProduct={setProduct}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Route>
            <Route path="/product">
              <Product
                product={product}
                setProduct={setProduct}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Route>
            <Route path="/accessories">
              <Accessories
                product={product}
                setProduct={setProduct}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </Route>
            <Route exact path="/Privacy">
              <Privacy />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
          </Switch>
          <Footer />
        </>
      ) : (
        <div className="back">
          <Landing setIslogin={setIslogin}/>
        </div>
      )}
    </div>
  );
}

export default App;
