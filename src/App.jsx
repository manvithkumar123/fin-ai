import React from 'react'
import Homepage from './Components/Homepage/Homepage'
import Mainpage from './Components/Mainpage/Mainpage'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/mainpage' element={<Mainpage />} />
      </Routes>
    </div>
  )
}

export default App
