import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout1 from './pages/Layout1'
import Layout2 from './pages/Layout2'
import Layout3 from './pages/Layout3'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layout1" element={<Layout1 />} />
        <Route path="/layout2" element={<Layout2 />} />
        <Route path="/layout3" element={<Layout3 />} />
      </Routes>
    </Router>
  )
}

export default App
