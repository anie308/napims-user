import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;
export const UploadMCon = styled.div`

`;
export const UploadText = styled.div``;
export const FileUploadCon = styled.div`
margin-top:50px ;
display:flex ;
gap:20px ;
`;
export const Folder = styled.div`
flex:1 ;
background: #FFFFFF;
box-shadow: 0px 5px 10px #F1F2FA;
border-radius: 8px;
height: 400px;
display:flex ;
flex-direction:column ;


  .menu-header {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content:space-between ;

    .menu-title {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 25px;
       color: #1c1f37;
    }
    .create{
      display:flex ;
      align-items:center ;
    }
  }
`;
export const UploadArea = styled.div`
position: relative;
flex:2 ;
background:#FFFFFF ;
border-radius: 8px;
border: 1px solid #000000;
box-sizing: border-box;
box-shadow: 0px 5px 10px #F1F2FA;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;

.con{
  display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
}

.drag{
  font-style: normal;
font-weight: 300;
font-size: 25px;
line-height: 29px;
/* identical to box height */

text-align: center;

color: #000000;
}

.or{
  font-weight: 300;
font-size: 20px;
line-height: 23px;
/* identical to box height */


color: #000000;
}

.icon{
  font-size:100px ;
}

input{
  opacity:0 ;
  position: absolute;
  top:0 ;
  left:0 ;
  height:100% ;
  width:100% ;
  cursor: pointer;

 
}


&:hover{
    opacity:0.6 ;
  }
`;
