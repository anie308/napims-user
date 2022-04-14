import React from 'react'
import { SCon, Ccon,SLayout, SMain } from './style'
import SideBar from '../Sidebar/SideBar'
import Mainnav from '../MainNav/Mainnav'

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