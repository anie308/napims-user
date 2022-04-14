import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Files from './Pages/Files'
import Home from './Pages/Home'
import Inbox from './Pages/Inbox'
import NotFound from './Pages/NotFound'

function Rote() {
  return (
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/inbox'  element={<Inbox/>}/>
      <Route path='/files'  element={<Files/>}/>
      <Route path='*'  element={<NotFound/>}/>
    </Routes>
  )
}

export default Rote