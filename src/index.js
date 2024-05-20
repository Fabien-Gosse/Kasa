import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Error from './pages/Error/'
import Logement from './pages/Logement/'
import Apropos from './pages/Apropos'
import './utils/styles/index.scss'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
