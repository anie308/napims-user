import React from 'react'
import SideBar from './Sidebar/SideBar'
import { SLayout, SMain } from './style'

function Layout({children}) {
  return (
    <SLayout>
        <SideBar/>
        <SMain>{children}</SMain>
    </SLayout>
  )
}

export default Layout