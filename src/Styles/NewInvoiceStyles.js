import { createUseStyles } from "react-jss";

export default function NewInvoiceStyles() {
  const useStyles = createUseStyles({
    invoiceBtn: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#7C5DFA",
      width: "130px",
      padding: "10px 7px",
      color: "white",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
    },
    icon: {
      borderRadius: "50px",
      backgroundColor: "white",
      width: "30px",
      height: "30px",
      margin: {
        right: "5px",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "none",

      "& i": {
        color: "#7C5DFA",
        fontSize: "12px",
        pointerEvents: "none",
      },
    },
    text: {
      pointerEvents: "none",
      fontWeight: "600",
    },
  });

  const classes = useStyles();
  return classes;
}
