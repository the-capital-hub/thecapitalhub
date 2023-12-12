import React from "react";
import { ListGroup } from "react-bootstrap";
import { LuShieldCheck } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import IconUser from "../../SvgIcons/IconUser";
import IconLock from "../../SvgIcons/IconLock";
import "./SettingsTabs.scss";
import { useNavigate } from "react-router-dom";

export const SETTINGS_TABS = [
  {
    id: "account",
    text: "Account",
    icon: <IconUser height={25} width={25} />,
  },
  {
    id: "signInAndSecurity",
    text: "Sign in & Security",
    icon: <IconLock height={25} width={25} />,
  },
  {
    id: "privacyPolicy",
    text: "Privacy Policy",
    icon: <LuShieldCheck size={25} />,
  },
  {
    id: "logout",
    text: "Logout",
    icon: <IoExitOutline size={25} />,
  },
];

export default function SettingsTabs({ activeTab, setActiveTab }) {
  const navigate = useNavigate();

  function handleTabClick(e, id) {
    setActiveTab(id);
    navigate("/settings");
  }

  return (
    <ListGroup className="settings-tabs shadow-sm" variant="flush">
      {SETTINGS_TABS.map((tab, index) => {
        return (
          <ListGroup.Item
            className="d-flex align-items-center gap-3"
            key={`${index}${tab.text}`}
            action
            active={activeTab === tab.id}
            onClick={(e) => handleTabClick(e, tab.id)}
          >
            {tab.icon}{" "}
            <p className="m-0" style={{ fontSize: "1.125rem" }}>
              {tab.text}
            </p>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
