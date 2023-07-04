import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './views/Homepage';
import ErrorPage from './views/ErrorPage';
import SignUp from './views/SignUp';
import NewArrivals from './views/NewArrivals';
// import "ionicons/dist/css/ionicons.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />


        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  </Router>
  )
}

export default App
