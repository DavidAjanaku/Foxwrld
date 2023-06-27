import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './views/Homepage';
import ErrorPage from './views/ErrorPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  </Router>
  )
}

export default App
