import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Error from './pages/Error/'
import Logement from './pages/Logement/'
import Apropos from './pages/Apropos'
import Header from './components/Header'

ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById('root')
)
