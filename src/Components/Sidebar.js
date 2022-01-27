import Avatar from "./Avatar";
import Theme from "./Theme";
import Logo from "../logo.svg";
import SidebarStyles from "../Styles/SidebarStyles";

export default function Sidebar() {
  const classes = SidebarStyles();
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
}
