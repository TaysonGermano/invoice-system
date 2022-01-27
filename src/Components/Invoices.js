import { useState, useEffect, useRef } from "react";
import Filter from "./Filter";
import NewInvoice from "./NewInvoice";
import Invoice from "./Invoice";
import { Link } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";
import { gsap } from "gsap";
import checkLocalStorage from "../Hooks/checkLocalStorage";
import InvoicesStyle from "../Styles/InvoicesStyles";

export default function Invoices(props) {
  checkLocalStorage();

  //State to hold the data
  const [permanent, setPermanent] = useLocalStorage("invoices", []);
  const data = JSON.parse(window.localStorage.getItem("invoices"));
  const [invoices, setInvoices] = useState(data);

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

  useEffect(() => {
    gsap.from(an.current, {
      duration: 1.5,
      x: "-100%",
    });
  }, []);

  const an = useRef();

  const classes = InvoicesStyle();
  // document title
  document.title = `(${invoices.length}) Invoices - Invoice App`;
  return (
    <div className={classes.InvoiceDetails} ref={an}>
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
