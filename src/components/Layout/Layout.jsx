import React from 'react'
import Mainnav from './MainNav/Mainnav'
import SideBar from './Sidebar/SideBar'
import { SCon, SLayout, SMain } from './style'

function Layout({children}) {
  return (
    <SLayout>
        <SideBar/>
        <SCon>
          <Mainnav/>
          <SMain>{children}</SMain>
        </SCon>
        
    </SLayout>
  )
}

export default Layout