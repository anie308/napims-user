import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;

  @media screen and (max-width: 900px){
  padding: 10px;
}
`;

export const FileUploadCon = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 900px){
    flex-direction:column ;
  
}
`;
export const Folder = styled.div`
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 5px 10px #f1f2fa;
  border-radius: 8px;
  height: 400px;
  display: flex;
  flex-direction: column;

  .menu-header {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;

    .menu-title {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 25px;
      color: #1c1f37;
    }
    .create {
      display: flex;
      align-items: center;
    }
  }
  .folder1 {
    padding:10px  15px;

    border-bottom: 1px #dadada solid;

    .identify {
      display: flex;
      align-items: center;
      .fold-icon {
        color: #017efa;
        font-size: 25px;
        margin-right: 10px;
      }
      p {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */

        color: #000000;
      }
    }
    .drop-file {
      display: flex;
      flex-direction: column;

    
      .file-item {
        display: flex;
        align-items: center;
        padding: 10px;
        margin-left: 25px;
        .med-icon {
          margin-right: 5px;
          color: #51cbff;
        }
        .item-name {
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 17px;

          color: #000000;
        }
      }
    }
    .add {
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        line-height: 15px;
        display:flex ;
        align-items:center ;
        justify-content:flex-end ;
        color: #017efa;
      }

  }

  @media screen and (max-width: 900px){
   min-height:300px ;
  
}
`;
export const UploadArea = styled.div`
  position: relative;
  flex: 2;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px #f1f2fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .drag {
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;

    color: #000000;
  }

  .or {
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    color: #000000;
  }

  .icon {
    font-size: 100px;
  }

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 900px){
   min-height:300px ;
  
}
`;
