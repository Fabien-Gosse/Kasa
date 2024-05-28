import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Error from './pages/Error/'
import Logement from './pages/Logement/'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'
import './utils/styles/index.scss'
import { DataProvider } from './utils/context'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </DataProvider>
    </Router>
  </React.StrictMode>
)
