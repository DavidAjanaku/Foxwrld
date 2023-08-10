import React, { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import ErrorPage from "./views/ErrorPage";
import SignUp from "./views/SignUp";
import NewArrivals from "./views/NewArrivals";
import ProductCardDetails from "./components/ProductsDetails/ProductCardDetails";
import ProductDetails from "./components/ProductsDetails/ProductDetails";
import ProductPage from "./views/ProductPage";
import Checkout from "./views/Checkout";
import Login from "./views/Login";
import Account from "./components/UserDashboard/Account";
import AccountSettings from "./components/UserDashboard/AccountSettings";
import AccountAddress from "./components/UserDashboard/AccountAddress";
import AccountOrder from "./components/UserDashboard/AccountOrder";
import Products from "./components/AdminDashboard/Products";
import NewProducts from "./components/AdminDashboard/NewProducts";
import Order from "./components/AdminDashboard/Order";
import EditOrder from "./components/AdminDashboard/EditOrder";
import Reports from "./components/AdminDashboard/Reports";
import EditHomepage from "./components/AdminDashboard/EditHomepage";
import MenuEditor from "./components/AdminDashboard/MenuEditor";
import About from "./views/About";
import Faq from "./views/Faq";
import Privacy from "./views/Privacy";
import Return from "./views/Return";
import Shipping from "./views/Shipping";
import Terms from "./views/Terms";

// import "ionicons/dist/css/ionicons.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        {/* <Route path="/ProductCardDetails" element={<ProductCardDetails />} /> */}
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/AccountSettings" element={<AccountSettings />} />
        <Route path="/AccountAddress" element={<AccountAddress />} />
        <Route path="/AccountOrder" element={<AccountOrder />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/NewProducts" element={<NewProducts />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/EditOrder" element={<EditOrder />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/EditHomepage" element={<EditHomepage />} />
        <Route path="/MenuEditor" element={<MenuEditor />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Return" element={<Return />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/Terms" element={<Terms />} />





        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
