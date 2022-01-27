import { createUseStyles } from "react-jss";

export default function FilterStyles() {
  const useStyles = createUseStyles({
    Filter: {
      "& select": {
        padding: "10px 20px",
        backgroundColor: "inherit",
        border: "none",
        borderBottom: "1px solid #7C5DFA",
      },
      ".dark & select": {
        color: "#fff",
        backgroundColor: "#141625",
      },
    },
  });

  const classes = useStyles();
  return classes;
}
