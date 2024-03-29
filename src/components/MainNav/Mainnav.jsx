import React from "react";
import {
  Container,
  UserCon,
  SearchActiveCon,
  NotCon,
  User,
  Avatar,
  Details,
  Name,
  Email,
  Drop,
  SearchCon,
  SearchIcon,
  SearchInput,
  ActiveCon,
  Status,
  Contacts,
  NotCount,
  NavOpen
} from "./style";
import Profile from "../../assets/img/profile.jpg";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import {FaBars} from 'react-icons/fa'
function Mainnav() {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () =>console.log('clicked')

  // setSidebar(!sidebar)

  return (
    <Container>
      <NavOpen >
      <FaBars className="bars" />
      </NavOpen>
      <UserCon>
        <User>
          <Avatar>
            <img src={Profile} alt="" />
          </Avatar>
          <Details>
            <Name>Esther Abraham</Name>
            <Email>estherabra@gmail.com</Email>
          </Details>
          <Drop>
            <BiChevronDown className="icon" />
          </Drop>
        </User>
      </UserCon>
      <SearchActiveCon>
        <SearchCon>
          <form action="">
            <SearchIcon type='submit'>
              <BiSearch className='icon'/>
            </SearchIcon>
            <SearchInput placeholder = 'Search...'/>
          </form>
        </SearchCon>
        <ActiveCon>
          <Status>
            <BsDot className='icon'/>
           <p className='status-name'>
           Online
           </p>
           </Status>
          <Contacts></Contacts>
        </ActiveCon>
      </SearchActiveCon>
      <NotCon>
        <IoIosNotificationsOutline className='icon'/>
        <NotCount/>
      </NotCon>
    </Container>
  );
}

export default Mainnav;
