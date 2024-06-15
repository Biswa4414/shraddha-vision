import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import ContactPage from './pages/ContactPage';
import About from './components/about/About';
const App = () => {
  return (
   <div>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/contact" element={<ContactPage />} />
   <Route path="/about" element={<About />} />
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
