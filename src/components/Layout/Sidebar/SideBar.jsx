import React from "react";
import {
  Con,
  Container,
  LinkCon,
  LinkIcon,
  LinkLabel,
  LinkNotification,
  Logo,
  SLink,
  Title,
} from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiBarChartSquare, BiUserCircle, BiSearchAlt } from "react-icons/bi";
import { BsChatText, BsCalendar2Event } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { RiFolder4Line, RiSettingsLine } from "react-icons/ri";

function SideBar() {
  return (
    <Container>
      <Logo to="/">
        <p className="icon">
          <AiOutlinePlusCircle className="iconn" />
        </p>
        <p>chams</p>
      </Logo>
      <Con>
        <Title>MAINMENU</Title>
       
        {
          mainLinkArr.map(({icon, label, notification, to })=> (
            <LinkCon key={label}>
            <SLink to={to}>
              <LinkIcon>{icon}</LinkIcon>
              <LinkLabel>{label}</LinkLabel>
              {!! notification && <LinkNotification>{notification}</LinkNotification>}
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
    notification: 1,
  },
  {
    label: "Inbox",
    icon: <BsChatText />,
    to: "/inbox",
    notification: 0,
  },
];
const workLinkArr = [
  {
    label: "Account",
    icon: <BiUserCircle />,
    to: "/account",
    notification: 0,
  },
  {
    label: "Scheduled Posts",
    icon: <BsCalendar2Event />,
    to: "/scheduled",
    notification: 0,
  },
  {
    label: "Communities",
    icon: <BiSearchAlt />,
    to: "/communities",
    notification: 0,
  },
  {
    label: "Analytics ",
    icon: <MdAnalytics />,
    to: "/analytics",
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
