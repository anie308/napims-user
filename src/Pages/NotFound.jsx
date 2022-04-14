import React from 'react'
import styled from 'styled-components'


const Container = styled.div` 
display:flex ;
align-items:center ;
justify-content:center ;

div{
  font-size:35px ;
}

`

function NotFound() {
  return (
    <Container>
      <div>Coming Soon</div>
    </Container>
  )
}

export default NotFound