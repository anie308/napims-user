import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Con,
  Container,
  Drop,
  DropButton,
  DropContent,
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
import {
  BsChatText,
  BsCalendar2Event,
  BsLayoutTextSidebar,
} from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { FaUsers, FaImages } from "react-icons/fa";
import { RiFolder4Line, RiSettingsLine } from "react-icons/ri";

function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const { pathname } = useLocation();
  return (
    <Container isOpen={sideBarOpen}>
      <SideBarButton
        isOpen={sideBarOpen}
        onClick={() => setSideBarOpen((p) => !p)}
      >
        <AiOutlineLeft className="icon" />
      </SideBarButton>

      <Logo to="/" style={!sideBarOpen ? { width: `fit-content` } : {}}>
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
            <Title>MainMenu</Title>
          </>
        )}
        {mainLinkArr.map(({ icon, label, notification, to }) => (
          <LinkCon key={label} isActive={pathname === to}>
            <SLink to={to} style={!sideBarOpen ? { width: `fit-content` } : {}}>
              <LinkIcon>{icon}</LinkIcon>
              {sideBarOpen && (
                <>
                  <LinkLabel>{label}</LinkLabel>
                  {!!notification && (
                    <LinkNotification>{notification}</LinkNotification>
                  )}
                </>
              )}
            </SLink>
          </LinkCon>
        ))}
      </Con>
      <Con>
        {sideBarOpen && (
          <>
            <Title>Workspace</Title>
          </>
        )}
        {workLinkArr.map(({ icon, label, notification, to }) => (
          <LinkCon key={label}>
            <SLink to={to} style={!sideBarOpen ? { width: `fit-content` } : {}}>
              <LinkIcon>{icon}</LinkIcon>
              {sideBarOpen && (
                <>
                  <LinkLabel>{label}</LinkLabel>
                  {!!notification && (
                    <LinkNotification>{notification}</LinkNotification>
                  )}
                </>
              )}
            </SLink>
          </LinkCon>
        ))}
      </Con>
      <Con>
        {sideBarOpen && (
          <>
            <Title>General</Title>
          </>
        )}

        <Drop>
          <DropButton   style={!sideBarOpen ? { width: `fit-content` } : {}}    onClick={e =>setIsDropped(!isDropped) }><RiFolder4Line className="iconnn"/>  {sideBarOpen && (
                <>
                  <p>Files and Folders</p>
                </>
              )}
          </DropButton>
         {isDropped && (
            <DropContent>
            {generalLinkArr.map(({ icon, label, notification, to }) => (
              <LinkCon key={label}>
                <SLink
                  to={to}
                  style={!sideBarOpen ? { width: `fit-content` } : {}}
                >
                  <LinkIcon>{icon}</LinkIcon>
                  {sideBarOpen && (
                    <>
                      <LinkLabel>{label}</LinkLabel>
                      {!!notification && (
                        <LinkNotification>{notification}</LinkNotification>
                      )}
                    </>
                  )}
                </SLink>
              </LinkCon>
            ))}
          </DropContent>
         )}
        </Drop>
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
    label: "Content-Text",
    icon: <BsLayoutTextSidebar />,
    to: "/media",
    notification: 0,
  },
  {
    label: "Content-Media",
    icon: <FaImages />,
    to: "/content",
    notification: 0,
  },
];
export default SideBar;
