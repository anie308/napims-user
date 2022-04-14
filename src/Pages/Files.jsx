import React from 'react'
import { Container } from '../styles/Files.style'
import UploadCon from '../components/MediaFiles/UploadCon'
import Test from '../components/Quill/Test'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'
// import 'react-quill/dist/quill.bubble.css'

function Files() {
  return (
    <Container>
      <UploadCon/>
      <Test/>
    </Container>
  )
}

export default Files