import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './pages/Card/Card'
import Cards from './pages/Cards/Cards'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Game from './pages/Game/Game'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/card/:id' element={<Card />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
