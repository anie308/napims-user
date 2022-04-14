import React from 'react'
import { BsImage } from "react-icons/bs";
import {

  Container,
  UploadItem,
  Icon,
  Title,
  UploadTime,
  Text,
  Time,
  But
} from "./style";

function UploadCard() {
  return (
    <Container>
    <UploadItem>
      <div className="one">
        {" "}
        <Icon>
          {" "}
          <BsImage className="icon" />
        </Icon>
        <Title>Title of content will appear here.....</Title>
        <UploadTime>
          <Text>Published Time</Text>
          <Time>2:00pm</Time>
        </UploadTime>
      </div>
      <div className="two">
       <But>Send for Authorization</But>
      </div>
    </UploadItem>
  </Container>
  )
}

export default UploadCard