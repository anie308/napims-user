import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
`;
export const UserCon = styled.div`
  padding: 0 20px;
  border-right: 1px solid #dadada;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;

export const SearchActiveCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 2;
  padding: 0 20px;
  border-right: 1px solid #dadada;

  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;
export const NotCon = styled.div`
position: relative;
margin:0 20px ;
height:40px ;
width:40px ;
background: #FFFFFF;
box-shadow: 0px 5px 10px #F1F2FA;
border-radius: 50%;
display: flex;
justify-content:center ;
align-items:center ;
cursor: pointer;

.icon{
    font-size:25px ;
}
  /* padding: 0 20px; */

  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  border-radius: 50%;
  margin-right: 10px;
  img {
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: inherit;
  }
`;
export const Details = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const Name = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
`;
export const Email = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;
`;
export const Drop = styled.div`
  margin: 0 5px;

  .icon {
    font-size: 25px;
    color: #1c1f37;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const SearchCon = styled.div`
  flex: 2;
  form {
    display: flex;
    align-items: center;
  }
`;
export const SearchIcon = styled.button`
  border: none;
  outline: none;

  .icon {
    font-size: 20px;
    color: #828282;
  }
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
  width: 100%;

  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #979797;
  }
`;
export const ActiveCon = styled.div`
  display: flex;
  align-items: center;
`;
export const Status = styled.div`
  display: flex;
  align-items: center;

  .icon {
    color: #30d988;
    font-size: 20px;
  }
 .status-name {
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 15px;
    color: #30d988;
    text-transform:uppercase ;
  }
`;
export const Contacts = styled.div``;
export const NotCount = styled.div`
position: absolute;
top:10px ;
left:20px ;
height:9px ;
width:9px ;
border-radius:50% ;
background:#FA3F3F ;
`;
