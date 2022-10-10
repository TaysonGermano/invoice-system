import { createUseStyles } from "react-jss";

export default function LoginStyles() {
  //styles

  const useStyles = createUseStyles({
    Form: {
      width: "450px",
      margin: "auto",
      padding: "20px",

      "& input": {
        width: "100%",
        height: "40px",
        border: "1px solid lightgray",
        borderRadius: "5px",
        margin: "10px 0",
        boxSizing: "border-box",
        padding: "0 5px",
      },

      "& button": {
        border: "none",
        padding: "15px 20px",
        borderRadius: "20px",
        cursor: "pointer",
        fontWeight: "600",
        transition: "opacity 0.4s ease-in-out",
        backgroundColor: "rgb(124, 93, 250)",
        color: "#fff",
        width: "100%",
      },
    },
  });

  const classes = useStyles();
  return classes;
}
