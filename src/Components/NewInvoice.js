import { createUseStyles } from "react-jss";

export default function NewInvoice(props) {
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
  return (
    <button className={classes.invoiceBtn} onClick={props.showForm}>
      <div className={classes.icon}>
        <i className="fas fa-plus"></i>
      </div>
      <div className={classes.text}>New Invoice</div>
    </button>
  );
}
