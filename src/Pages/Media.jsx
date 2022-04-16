import React from "react";
import UploadCon from '../components/MediaFiles/UploadCon'
import { AiOutlinePlus, AiTwotoneFolderOpen } from "react-icons/ai";
import { BsImage, BsImageFill } from "react-icons/bs";
import {
  Container,
  FileUploadCon,
  Folder,
  UploadArea,
} from "../styles/Media.style";
import { useState } from "react";

function Media() {
  const onFileChange = (files) => {
    console.log(files);
  };

  const [file, setFile] = useState([]);
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...file, newFile];
      setFile(updatedList);
      onFileChange(updatedList);
    }
  };
  return (
    <Container>
      <UploadCon/>
     
      <FileUploadCon>
        <Folder>
          <div className="menu-header">
            <div className="menu-title">Menu Folder</div>
            <div className="create">
              <AiOutlinePlus />
              <p>Create Folder</p>
            </div>
          </div>
          <div>
            <div className="folder1">
              <div className="identify">
                <AiTwotoneFolderOpen className="fold-icon" />
                <p>Folder 1</p>
              </div>
              {file.length > 0 ? (
                <div>
                  <div className="drop-file">
                  {file.map((item, index) => (
                    <div key={index} className="file-item">
                      <BsImageFill className="med-icon" />
                      <p className="item-name">{item.name} </p>
                    </div>
                  ))}
                </div>
                   <div className="add">
                Add Image

              </div>
                </div>
                
                
              ) : null}
             
            </div>
           
          </div>
        </Folder>
        <UploadArea onChange={(files) => onFileChange(files)}>
          <div className="con">
            <BsImage className="icon" />
            <p className="drag">Drap your image here to add to your folder</p>
            <p className="or">or choose your file</p>
          </div>
          <input type="file" value="" onChange={onFileDrop} />
        </UploadArea>
      </FileUploadCon>
    </Container>
  );
}

export default Media;
