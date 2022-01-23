import { createUseStyles } from "react-jss";
import { useState, useEffect, useRef } from "react";
import Filter from "./Filter";
import NewInvoice from "./NewInvoice";
import Invoice from "./Invoice";
import { Link } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import { gsap } from "gsap";

export default function Invoices(props) {
  //State to hold the data

  window.localStorage.getItem("invoices") === null &&
    window.localStorage.setItem(
      "invoices",
      JSON.stringify([
        {
          id: "45710e0a-5c99-45fc-b2b8-378889311255",
          street: "80 Parklands Main Rd",
          city: "Cape Town",
          post: "5000",
          country: "South Africa",
          clientName: "Gigabyte",
          clientEmail: "gigabyte@gmail.com",
          clientStreet: "73 Stock Road",
          clientCity: "Cape Town",
          clientPost: "7785",
          clientCountry: "South Africa",
          date: "2022-01-27",
          payment: "14",
          description: "Sale of goods",
          items: [
            {
              id: "09fecfe7-a98c-472e-85e6-54bef30e7ebc",
              itemName: "HP Desktop Computer",
              price: "3400",
              qty: "8",
              total: 27200,
            },
          ],
          granTotal: 27200,
          status: "Pending",
        },
        {
          id: "10e20cf6-4f10-40d8-a4b2-c7ac62dbc43c",
          street: "80 Parklands Main Rd",
          city: "Cape Town",
          post: "5000",
          country: "South Africa",
          clientName: "Joanilson",
          clientEmail: "joanilson@gmail.com",
          clientStreet: "121 long street",
          clientCity: "Cape Town",
          clientPost: "8000",
          clientCountry: "South Africa",
          date: "2022-01-28",
          payment: "14",
          description: "Sale of goods",
          items: [
            {
              id: "2b65b40c-d107-408b-9c5f-73aa81f75c29",
              itemName: "Apple Watch series 3",
              price: "3560",
              qty: "2",
              total: 7120,
            },
          ],
          granTotal: 7120,
          status: "Pending",
        },
        {
          id: "7f7e4511-126b-468f-b2a2-27f576f4a4c5",
          street: "80 Parklands Main Rd",
          city: "Cape Town",
          post: "5000",
          country: "South Africa",
          clientName: "Augusto",
          clientEmail: "augusto@gmail.com",
          clientStreet: "30 The Beer Rd",
          clientCity: "Windhoek",
          clientPost: "3000",
          clientCountry: "Namibia",
          date: "2022-01-29",
          payment: "7",
          description: "Sale of goods",
          items: [
            {
              id: "46ddc8d3-53ad-4e0e-bf2d-a49cf4f8f6da",
              itemName: '"70 JVC Tv',
              price: "13800",
              qty: "1",
              total: 13800,
            },
            {
              id: "a6f66d35-cc28-40d0-8659-8d43252c8bbb",
              itemName: "Google home 3",
              price: "5600",
              qty: "1",
              total: 5600,
            },
          ],
          granTotal: 19400,
          status: "Paid",
        },
        {
          id: "d6580adb-0ac5-464b-a7f0-44df337ecda1",
          street: "80 Parklands Main Rd",
          city: "Cape Town",
          post: "5000",
          country: "South Africa",
          clientName: "Olivia",
          clientEmail: "olivia@gmail.com",
          clientStreet: "06 Parkland Main Rd",
          clientCity: "Cape Town",
          clientPost: "5000",
          clientCountry: "South Africa",
          date: "2022-01-22",
          payment: "14",
          description: "Sale of goods",
          items: [
            {
              id: "64da0664-f2e4-402c-8806-876cff695ff7",
              itemName: "Iphone 13",
              price: "15500",
              qty: "2",
              total: 31000,
            },
            {
              id: "d0dc2b63-5c73-418b-be8f-737ca12ffa31",
              itemName: "Macbook Pro 2020",
              price: "20500",
              qty: "1",
              total: 20500,
            },
            {
              id: "7614575b-0be9-450d-98a7-f4f94d50be2e",
              itemName: "Apple Watch",
              price: "3560",
              qty: "3",
              total: 10680,
            },
          ],
          granTotal: 62180,
          status: "Paid",
        },
        {
          id: "e8f8a8eb-89f6-488b-aadf-c9456854d3da",
          street: "106 Adderley Street",
          city: "Cape Town",
          post: "8001",
          country: "South Africa",
          clientName: "Monteiro",
          clientEmail: "taysongermano@gmail.com",
          clientStreet: "121 long street",
          clientCity: "Cape Town",
          clientPost: "8000",
          clientCountry: "South Africa",
          date: "2022-01-28",
          payment: "",
          description: "Web design ",
          items: [
            {
              id: "7fa42a71-78b9-4920-a53c-9de94dc41554",
              itemName: "Laptop",
              price: "20500",
              qty: "2",
              total: 41000,
            },
          ],
          granTotal: 41000,
          status: "Draft",
        },
      ])
    );
  const [permanent, setPermanent] = useLocalStorage("invoices", []);
  const data = JSON.parse(window.localStorage.getItem("invoices"));
  const [invoices, setInvoices] = useState(data);

  const useStyles = createUseStyles({
    InvoiceDetails: {
      zIndex: "1",
      maxWidth: "700px",
      minWidth: "450px",
      margin: "0 auto",
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

      "@media screen and (max-width: 700px)": {
        "& .second-columm": {
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "flex-end",
          justifyContent: "space-between",
          height: "100px",
        },
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

  useEffect(() => {
    gsap.from(an.current, {
      duration: 1.5,
      x: "-100%",
    });
  }, []);

  const an = useRef();

  const classes = useStyles();
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
