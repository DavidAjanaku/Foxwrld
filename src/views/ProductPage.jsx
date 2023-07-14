import React, { useState } from 'react';
import Header from "../components/Navigation/Header";
import ProductDetails from '../components/ProductsDetails/ProductDetails';
import Footer from '../components/Navigation/Footer';
import RecommendedProducts from '../components/ProductsDetails/RecommendedProducts';
import HamburgerMenu from '../components/Navigation/Hamburger';

export default function ProductPage() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
    console.log('Cart count:', count);

  };

  

  return (
    <div>
      <HamburgerMenu color="black" cartCount={cartCount} />

      <Header color="black" cartCount={cartCount} />
      <div>
        <ProductDetails updateCartCount={updateCartCount} />
      </div>
<RecommendedProducts/>
      <Footer/>
    </div>
  );
}
