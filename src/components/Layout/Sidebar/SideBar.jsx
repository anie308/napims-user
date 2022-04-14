import React, { useState } from "react";
import {useLocation} from 'react-router-dom'
import {
  Con,
  Container,
  LinkCon,
  LinkIcon,
  LinkLabel,
  LinkNotification,
  Logo,
  SideBarButton,
  SLink,
  Title,
} from "./style";
import { AiOutlinePlusCircle, AiOutlineLeft } from "react-icons/ai";
import { BiBarChartSquare, BiUserCircle } from "react-icons/bi";
import { BsChatText, BsCalendar2Event } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiFolder4Line, RiSettingsLine } from "react-icons/ri";

function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const {pathname} = useLocation();
  return (
    <Container isOpen={sideBarOpen}>
     
      <SideBarButton isOpen={sideBarOpen} onClick={() => setSideBarOpen((p) => !p)}>
        <AiOutlineLeft className="icon"/>
      </SideBarButton>
      
      <Logo to="/" style={!sideBarOpen ? {width:`fit-content`} : {}}>
        <p className="icon">
          <AiOutlinePlusCircle className="iconn" />
        </p>
        
        {sideBarOpen && (
                 <>
                 <p>chams</p>
                 </>
              )}
      </Logo>
      <Con>
      {sideBarOpen && (
                 <>
              <Title>General</Title>
                 </>
              )}
        {
          mainLinkArr.map(({icon, label, notification, to })=> (
            <LinkCon key={label} isActive={pathname === to}>
            <SLink to={to}  style={!sideBarOpen ? {width:`fit-content`} : {}}>
              <LinkIcon>{icon}</LinkIcon>
              {sideBarOpen && (
                 <>
                 <LinkLabel>{label}</LinkLabel>
                 {!! notification && <LinkNotification>{notification}</LinkNotification>}
                 </>
              )}
             
              
            </SLink>
          </LinkCon>
          ))
        }
      </Con>
      <Con>
      {sideBarOpen && (
                 <>
              <Title>General</Title>
                 </>
              )}
        {
          workLinkArr.map(({icon, label, notification, to })=> (
            <LinkCon key={label}>
            <SLink to={to} style={!sideBarOpen ? {width:`fit-content`} : {}}>
              <LinkIcon>{icon}</LinkIcon>
              {sideBarOpen && (
                 <>
                 <LinkLabel>{label}</LinkLabel>
                 {!! notification && <LinkNotification>{notification}</LinkNotification>}
                 </>
              )}
            </SLink>
          </LinkCon>
          ))
        }
      </Con>
      <Con>
      {sideBarOpen && (
                 <>
              <Title>General</Title>
                 </>
              )}
        
        {
          generalLinkArr.map(({icon, label, notification, to })=> (
            <LinkCon key={label}>
            <SLink to={to} style={!sideBarOpen ? {width:`fit-content`} : {}}>
              <LinkIcon>{icon}</LinkIcon>
              {sideBarOpen && (
                 <>
                 <LinkLabel>{label}</LinkLabel>
                 {!! notification && <LinkNotification>{notification}</LinkNotification>}
                 </>
              )}
            </SLink>
          </LinkCon>
          ))
        }
      </Con>
    </Container>
  );
}

const mainLinkArr = [
  {
    label: "Home",
    icon: <BiBarChartSquare />,
    to: "/",
    notification: 0,
  },
  {
    label: "Inbox",
    icon: <BsChatText />,
    to: "/inbox",
    notification: 1,
  },
];
const workLinkArr = [
  {
    label: "Profile",
    icon: <BiUserCircle />,
    to: "/account",
    notification: 0,
  },
  {
    label: "Pending Authorization",
    icon: <BsCalendar2Event />,
    to: "/pending",
    notification: 0,
  },
  {
    label: "Users",
    icon: <FaUsers />,
    to: "/users",
    notification: 0,
  },
  {
    label: "Work Log ",
    icon: <MdAnalytics />,
    to: "/log",
    notification: 0,
  },
];
const generalLinkArr = [
  {
    label: "File and Folders",
    icon: <RiFolder4Line />,
    to: "/files",
    notification: 0,
  },
  {
    label: "Settings",
    icon: <RiSettingsLine />,
    to: "/settings",
    notification: 0,
  },
];
export default SideBar;
