import { createUseStyles } from "react-jss";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import NewInvoice from "./NewInvoice";
import Invoice from "./Invoice";
import { Link } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

export default function Invoices(props) {
  //State to hold the data

  window.localStorage.getItem("invoices") === null &&
    window.localStorage.setItem("invoices", JSON.stringify([]));
  const [permanent, setPermanent] = useLocalStorage("invoices", []);
  const data = JSON.parse(window.localStorage.getItem("invoices"));
  const [invoices, setInvoices] = useState(data);

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
          color: "#000",
        },
      },

      ".dark & h1": {
        color: "#fff !important",
      },

      "& .second-columm": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "45%",
      },
    },
  });

  //filtering
  const filterHandler = (value) => {
    value !== "All"
      ? setInvoices([...data.filter((d) => d.status === value)])
      : setInvoices([...data]);
  };

  //useEffect
  useEffect(() => {
    if (props.fetch) setPermanent([props.fetch, ...permanent]);
    setInvoices(data);
  }, [props.fetch]);

  const classes = useStyles();
  return (
    <div className={classes.InvoiceDetails}>
      <div className="flexbox">
        <div className="first-columm">
          <h1>Invoices</h1>
          <div className="Counter">
            There are {invoices.length} total invoices
          </div>
        </div>
        <div className="second-columm">
          <Filter change={filterHandler} />
          <NewInvoice showForm={props.formHandler} />
        </div>
      </div>
      {invoices.map((d) => (
        <Link
          to={`/id/${d.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
          key={d.id}
        >
          <Invoice
            id={d.id.slice(0, 5).toUpperCase()}
            date={d.date}
            name={d.clientName}
            price={d.granTotal.toLocaleString()}
            status={d.status}
          />
        </Link>
      ))}
    </div>
  );
}
