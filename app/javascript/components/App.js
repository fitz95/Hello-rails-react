import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './Home'
import Greeting from './Greeting'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/greeting/random" element={<Home />} />
            <Route  path="/" element={<Greeting />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App