import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width:200px ;
background: #081A51;
height:100vh ;
padding: 0  0 0 15px  ;
position:relative ;
`
export const Logo = styled(Link)`
display: flex;
cursor: pointer;
align-items:center ;
margin:0 ;
padding: 0;
text-decoration:none ;
.icon{
    background:#017EFA ;
    height:30px ;
    width:30px ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    border-radius:8px;
    margin-right:10px ;

    .iconn{
        font-size:19px ;
        font-weight:500 ;
    }
}
p{
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
}
`
export const Title = styled.p`
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 14px;
color: #51CBFF;

`
export const Con = styled.div`
margin-top:5px ;

`

export const LinkCon = styled.div`
background:transparent ;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
margin:5px 0 ;
padding: 8px ;
&:hover{
background:#1B2B65  ;
}
`
export const SLink = styled(Link)`
display:flex ;
align-items:center ;
text-decoration:none ;
font-size:16px ;

`
export const LinkIcon = styled.div`
display:flex ;
color:#FFFFFF ;

svg{
    font-size:20px ;
}
`
export const LinkLabel = styled.div`
display:block ;
flex:1 ;
margin-left:10px ;
color: #FFFFFF;
`
export const LinkNotification = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
font-size:14px ;
border-radius:4px ;
padding:2px 8px ;
color:white ;
background:#CF3A59 ;
margin-right:2px ;
`