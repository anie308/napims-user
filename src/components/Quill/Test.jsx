import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";
import { Container } from "./Test.style";

function Test() {
  return (
    <Container>
      <div className="container">
        <form className="form">
          <div className="form-row">
            <div className="top-card">
              <div className="title-con">
                <input type="text" name="title" required className="title-input" placeholder="Title..."/>
              </div>
              <div className="toobar">
                <EditorToolbar toolbarId={"t1"} />
              </div>
              <ReactQuill
              className="quill-com"
                theme="snow"
                // placeholder={"Write something awesome..."}
                modules={modules("t1")}
                formats={formats}
              />
            </div>
            <div className="submit-con">
              <button type="submit" className="btn">Upload Content</button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
export default Test;
