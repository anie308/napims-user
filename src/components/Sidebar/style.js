import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div`
position:fixed ;
top:0 ;
left: 0;
width:200px;
background: #081A51;
height:100vh ;
padding:10px ;

@media screen and (max-width: 900px){
    /* left: -100%;     */
    left:${({ sidebar }) => (sidebar ? '10px' : '-100%')};

}
`
export const Logo = styled(Link)`
display: flex;
cursor: pointer;
align-items:center ;
height:60px ;
text-decoration:none ;
outline:none ;
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

`

export const LinkCon = styled.div`
background:${({isActive}) => !isActive ? `transparent` : ` #1B2B65`} ;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
/* border-top-right-radius:  ${({isOpen}) => !isOpen ?  `5px` : `none`}  ;
border-bottom-right-radius:  ${({isOpen}) => !isOpen ?  `5px` : `none`} ; */

padding: 8px ;
margin:5px 0 ;
&:hover{
background:#1B2B65  ;
}
`
export const SLink = styled(Link)`
display:flex ;
align-items:center ;
text-decoration:none ;
font-size:16px ;
outline:none ;

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
margin-left:5px ;
color: #FFFFFF;
font-size:14px ;
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

export const Drop = styled.div` 
width:100% ;
position: relative;
user-select:none ;

`
export const DropButton = styled.div` 
display:flex ;
align-items:center ;
cursor: pointer;
color: #FFFFFF;

.iconnn{
    font-size: 24px;
}

p{
    color: #FFFFFF;
    margin-left:10px ;
}


`
export const DropContent = styled.div` 
padding-left:20px ;
position: absolute;
width:90% ;
overflow:hidden ;

`