import React, { useState } from 'react';
import Header from "../components/Navigation/Header";
import ProductDetails from '../components/ProductsDetails/ProductDetails';
import Footer from '../components/Navigation/Footer';

export default function ProductPage() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
    console.log('Cart count:', count);

  };

  

  return (
    <div>
      <Header color="black" cartCount={cartCount} />
      <div>
        <ProductDetails updateCartCount={updateCartCount} />
      </div>

      <Footer/>
    </div>
  );
}
