import "./CSS/App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Checkout from "./Components/Checkout.js";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SideMenu from "./Components/SideMenu";
import Footer from "./Components/Footer";
import { stripePublicKey } from "./keys";

const promise = loadStripe(stripePublicKey);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The user just logged in / the user was logged out
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <SideMenu />
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <SideMenu />
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <SideMenu />
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <SideMenu />
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
