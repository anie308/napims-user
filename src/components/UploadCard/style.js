import styled from "styled-components";

export const Container = styled.div`
background: #ffffff;
box-shadow: 0px 5px 10px #f1f2fa;
border-radius: 8px;
padding: 20px 30px;
margin:10px 0 ;
@media screen and (max-width: 900px){
  padding: 20px;
}
`;
export const UploadItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 900px){
  flex-direction:column ;
  gap:20px ;
  align-items:center ;
}

.one {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.two{
  @media screen and (max-width: 900px){
  width:100% ;
}
}
`;
export const Icon = styled.div`
.icon {
  color: #51cbff;
  font-size: 35px;

  @media screen and (max-width: 900px){
  font-size:40px ;
}
}
`;
export const Title = styled.div`
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 25px;
color: #000000;
margin:0 20px ;


@media screen and (max-width: 900px){
  font-size:15px ;
  line-height:18px ;
  font-weight:500 ;
  margin: 0 0 0 20px ;
}
`;
export const UploadTime = styled.div`


@media screen and (max-width: 900px){
  display:none ;
}
`;
export const Text = styled.div`
font-style: normal;
font-weight: 300;
font-size: 10px;
line-height: 12px;
color: #000000;
`;
export const Time = styled.div`
font-style: normal;
font-weight: 800;
font-size: 10px;
line-height: 12px;
color: #000000;
`
export const But = styled.button`
padding:14px 20px ;
border-radius:10px ;
background:#254BD1 ;
outline:none ;
border:0 ;
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 18px;
text-align: center;
color: #FFFFFF;
cursor: pointer;


@media screen and (max-width: 900px){
  width:100% ;
}

`
