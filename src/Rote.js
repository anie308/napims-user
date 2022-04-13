import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Inbox from './Pages/Inbox'

function Rote() {
  return (
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/inbox'  element={<Inbox/>}/>
    </Routes>
  )
}

export default Rote