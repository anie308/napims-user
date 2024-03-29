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
  SLink,
  Title,
} from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiBarChartSquare, BiUserCircle } from "react-icons/bi";
import {
  BsChatText,
  BsCalendar2Event,
  BsLayoutTextSidebar,
} from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { FaUsers, FaImages } from "react-icons/fa";
import { RiFolder4Line } from "react-icons/ri";

function SideBar() {
  const [isDropped, setIsDropped] = useState(false);
  const { pathname } = useLocation();
  return (
    <Container>
      <Logo to="/">
        <p className="icon">
          <AiOutlinePlusCircle className="iconn" />
        </p>

        <p>NAPIMS</p>
      </Logo>
      <Con>
        <Title>MainMenu</Title>

        {mainLinkArr.map(({ icon, label, notification, to }) => (
          <LinkCon key={label} isActive={pathname === to}>
            <SLink to={to}>
              <LinkIcon>{icon}</LinkIcon>

              <LinkLabel>{label}</LinkLabel>

              {!!notification && (
                <LinkNotification>{notification}</LinkNotification>
              )}
            </SLink>
          </LinkCon>
        ))}
        <Con>
          <Drop>
            <DropButton onClick={(e) => setIsDropped(!isDropped)}>
              <RiFolder4Line className="iconnn" />
              <p>Files and Folders</p>
            </DropButton>
            {isDropped && (
              <DropContent>
                {generalLinkArr.map(({ icon, label, notification, to }) => (
                  <LinkCon key={label}>
                    <SLink to={to}>
                      <LinkIcon>{icon}</LinkIcon>

                      <LinkLabel>{label}</LinkLabel>
                      {!!notification && (
                        <LinkNotification>{notification}</LinkNotification>
                      )}
                    </SLink>
                  </LinkCon>
                ))}
              </DropContent>
            )}
          </Drop>
        </Con>
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
    label: "Pending Authorization",
    icon: <BsCalendar2Event />,
    to: "/pending",
    notification: 0,
  },
  {
    label: "Profile",
    icon: <BiUserCircle />,
    to: "/account",
    notification: 0,
  },
];

const generalLinkArr = [
  {
    label: "Content-Text",
    icon: <BsLayoutTextSidebar />,
    to: "/content",
    notification: 0,
  },
  {
    label: "Content-Media",
    icon: <FaImages />,
    to: "/media",
    notification: 0,
  },
];
export default SideBar;
