import Avatar from "./Avatar";
import Theme from "./Theme";
import Logo from "../logo.svg";
import { createUseStyles } from "react-jss";

export default function Sidebar() {
  const useStyles = createUseStyles({
    Sidebar: {
      zIndex: "4",
      backgroundColor: "#373B53",
      height: "100vh",
      width: "130px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      position: "fixed",

      "& .bottom-elements": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        height: "100px",
      },

      "& .Sidebar-Logo": {
        width: "100%",
        height: "100px",
        backgroundColor: "#7C5DFA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& img": {
          width: "60px",
        },
      },
    },
  });

  const classes = useStyles();
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
