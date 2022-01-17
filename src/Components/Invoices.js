import { createUseStyles } from "react-jss";
import Filter from "./Filter";
import NewInvoice from "./NewInvoice";
import Invoice from "./Invoice";

export default function Invoices(props) {
  const useStyles = createUseStyles({
    InvoiceDetails: {
      zIndex: "1",
      "& .flexbox": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "50px",

        "& h1": {
          margin: "5px 0",
        },
      },

      "& .second-columm": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "45%",
      },
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.InvoiceDetails}>
      <div className="flexbox">
        <div className="first-columm">
          <h1>Invoices</h1>
          <div className="Counter">There are {} total invoices</div>
        </div>
        <div className="second-columm">
          <Filter />
          <NewInvoice showForm={props.formHandler} />
        </div>
      </div>
      <Invoice />
      <Invoice />
      <Invoice />
    </div>
  );
}
