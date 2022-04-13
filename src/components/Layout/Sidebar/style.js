import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width:200px ;
background: #081A51;
height:100vh ;
/* padding:20px  ; */
position:relative ;
`
export const Logo = styled(Link)`
display: flex;
cursor: pointer;
align-items:center ;
padding:0 20px ;
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