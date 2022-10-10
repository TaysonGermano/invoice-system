import React, { useContext } from "react";
import Avatar from "./Avatar";
import Theme from "./Theme";
import Logo from "../logo.svg";
import SidebarStyles from "../Styles/SidebarStyles";
import { Auth } from "../Context/auth";

export default function Sidebar() {
  const auth = useContext(Auth);

  const Component = () => {
    if (!auth.userLoggedIn) return null;

    return (
      <div className={classes.Sidebar}>
        <div className="Sidebar-Logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="bottom-elements">
          <div className="Sidebar-Theme">
            <Theme />
          </div>
          <div className="Sidebar-Avatar">
            <Avatar />
          </div>
        </div>
      </div>
    );
  };

  const classes = SidebarStyles();
  return <Component />;
}
