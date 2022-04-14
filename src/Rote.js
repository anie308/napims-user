import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Media from './Pages/Media'
import Home from './Pages/Home'
import Inbox from './Pages/Inbox'
import NotFound from './Pages/NotFound'
import Files from './Pages/Files'

function Rote() {
  return (
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/inbox'  element={<Inbox/>}/>
      <Route path='/media'  element={<Media/>}/>
      <Route path='/content'  element={<Files/>}/>
      <Route path='*'  element={<NotFound/>}/>
    </Routes>
  )
}

export default Rote