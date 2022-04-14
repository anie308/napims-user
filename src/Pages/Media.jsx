import React from "react";
import UploadCard from "../components/Upload/UploadCard/UploadCard";
import {AiOutlinePlus} from 'react-icons/ai'
import {BsImage} from 'react-icons/bs'
import { ImageConfig } from "../components/ImageDefault";
import {
  Container,
  UploadMCon,
  UploadText,
  FileUploadCon,
  Folder,
  UploadArea
} from "../styles/Media.style";
import { useState } from "react";

function Media() {
  const onFileChange = (files) => {
    console.log(files)
  }

  const [file, setFile] = useState([])   
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if(newFile) {
      const updatedList = [...file, newFile];
      setFile(updatedList)
      onFileChange(updatedList)
    }
  }
  return (
    <Container>
      <UploadMCon>
        <UploadText> </UploadText>
        <UploadCard />
        <UploadCard />
      </UploadMCon>
      <FileUploadCon>
        <Folder>
          <div className="menu-header">
            <div className="menu-title">Menu Folder</div>
            <div className="create">
              <AiOutlinePlus/>
              <p>Create Folder</p>
           
            </div>
          </div>
          <div>
              <div>
             {
                file.length > 0 ? ( 
                  <div className="drop-file">
                    <p>Ready to upload</p>
                    {
                      file.map((item, index) => (
                        <div key={index} className="file-item">
                          <img src={ImageConfig[item.type.split('/')[1] || ImageConfig['default']]} alt="" />
                          <p>{item.name} </p>
                          <p>{item.size}</p>
                        </div>
                      ))
                    }
                  </div>
                ): null
              }
             </div>
          </div>

        </Folder>
        <UploadArea 
        onFileChange={(files) => onFileChange(files)}
        >
         <div className="con">
         <BsImage className="icon"/>
          <p className="drag">Drap your image here to add to your folder</p>
          <p className="or">or choose your file</p>
         </div>
         <input type="file" value='' onChange={onFileDrop}/>

        </UploadArea>
      </FileUploadCon>
    </Container>
  );
}

export default Media;
