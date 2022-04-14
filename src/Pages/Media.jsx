import React from "react";
import UploadCard from "../components/Upload/UploadCard/UploadCard";
import {AiOutlinePlus} from 'react-icons/ai'
import {
  Container,
  UploadMCon,
  UploadText,
  FileUploadCon,
  Folder,
  UploadArea
} from "../styles/Media.style";

function Media() {
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
            </div>
          </div>

        </Folder>
        <UploadArea>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam blanditiis necessitatibus iure dolorem? Eius commodi cumque, qui pariatur perferendis repellendus ea laborum natus, ullam aut similique numquam deserunt voluptate!
        </UploadArea>
      </FileUploadCon>
    </Container>
  );
}

export default Media;
