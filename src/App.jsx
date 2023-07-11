import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './views/Homepage';
import ErrorPage from './views/ErrorPage';
import SignUp from './views/SignUp';
import NewArrivals from './views/NewArrivals';
import ProductCardDetails from './components/ProductsDetails/ProductCardDetails';
import ProductDetails from './components/ProductsDetails/ProductDetails';
import ProductPage from './views/ProductPage';
// import "ionicons/dist/css/ionicons.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/ProductCardDetails" element={<ProductCardDetails />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/ProductPage" element={<ProductPage />} />


        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  </Router>
  )
}

export default App
