import React from 'react'
import { Container, Logo } from './style'
import {AiOutlinePlusCircle} from 'react-icons/ai'

function SideBar() {
  return (
    <Container>
        <Logo to='/'>
            <p className='icon'><AiOutlinePlusCircle className='iconn'/></p>
            <p>chams</p>
        </Logo>
    </Container>
  )
}

export default SideBar