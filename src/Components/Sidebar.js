import React, { useContext } from "react";
import Avatar from "./Avatar";
import Theme from "./Theme";
import Logo from "../logo.svg";
import SidebarStyles from "../Styles/SidebarStyles";
import { Auth } from "../Context/auth";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const auth = useContext(Auth);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    auth.setUserLoggedIn(false);
    navigate("/login");
  };

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
          <div className="Sidebar-Avatar" style={{ marginTop: "7px" }}>
            <Avatar />
          </div>
          <div
            className="link"
            onClick={logout}
            style={{ cursor: "pointer", marginTop: "5px" }}
          >
            <small>Logout</small>
          </div>
        </div>
      </div>
    );
  };

  const classes = SidebarStyles();
  return <Component />;
}
