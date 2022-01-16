import Avatar from "./Avatar";
import Theme from "./Theme";
import Logo from "../logo.svg";
import { createUseStyles } from "react-jss";

export default function Sidebar() {
  return (
    <div>
      <div className="Sidebar-Logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="Sidebar-Theme">
        <Theme />
      </div>
      <div className="Sidebar-Avatar">
        <Avatar />
      </div>
    </div>
  );
}
