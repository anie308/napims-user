import React from 'react'
import UploadCard from '../UploadCard/UploadCard'
import { UploadMCon, UploadText } from './UploadCon.style'

function UploadCon() {
  return (
    <UploadMCon>
    <UploadText> </UploadText>
    <UploadCard />
    <UploadCard />
  </UploadMCon>
  )
}

export default UploadCon