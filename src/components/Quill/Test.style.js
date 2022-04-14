import styled from "styled-components";

export const Container = styled.div`
  .form {
    width: 100%;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px 8px 0px 0px;

    .top-card {
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 8px 8px 0px 0px;
      .title-con {
        margin: 10px;
        padding: 10px 0;
        .title-input {
          width: 100%;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 1px solid #e3e5f3;
          padding: 8px 2px;
          outline: none;

          &::placeholder {
            font-style: normal;
            font-weight: 300;
            color: #000000;
          }
        }
      }
      .toolbar {
        border: 1px solid;
      }

      .quill-com {
        border: none !important;
        height: 200px;
      }
    }

    .submit-con {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        border: none;
        outline: none;
        padding: 15px 20px;
        background: #23af72;
        border-radius: 10px;
        font-style: normal;
        font-weight: 800;
        font-size: 15px;
        line-height: 18px;
        text-align: center;

        color: #ffffff;
      }
    }
  }
`;
