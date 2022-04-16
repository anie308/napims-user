import styled from "styled-components";



export const SLayout = styled.div` 
position: relative;
display:flex ;
width: 100%;

`
export const Ccon = styled.div`  
/* position:fixed ;
top:0 ;
left: 0; */
`
export const SCon = styled.div` 
position: relative;
left: 200px;
width: calc(100% - 200px);

@media screen and (max-width: 900px){
    left:0 ;
    width:100% ;
}
`
export const SMain = styled.div` 
    height:100% ; 
 background:#DADADA ;


`