import React from 'react'
import Mainnav from './MainNav/Mainnav'
import SideBar from './Sidebar/SideBar'
import { SCon, Ccon,SLayout, SMain } from './style'

function Layout({children}) {

  return (
    <SLayout>
      <Ccon>
      <SideBar/>

      </Ccon>
        <SCon>
          <Mainnav/> 
          <SMain>{children}</SMain>
        </SCon>
        
    </SLayout>
  )
}

export default Layout