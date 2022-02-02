import { useState } from "react";
import { useFormik } from "formik";
import FormStyles from "../Styles/FormStyles";
import { v4 as uuidv4 } from "uuid";

function EditForm(props) {
  const fetchData = JSON.parse(window.localStorage.getItem("invoices"));
  const getInvoice = fetchData.filter((i) => i.id === props.id);

  // formik
  const formik = useFormik({
    initialValues: { ...getInvoice[0] },

    onSubmit: (values) => {
      // Adding news items to the list
      formik.values.granTotal = 0;
      const newItems = [];
      for (let elements of items) {
        elements.total = elements.qty * elements.price;
        newItems.push(elements);

        formik.values.granTotal += elements.total;
      }
      formik.values.items = [...newItems];

      //Removing old data from the database
      const newData = fetchData.filter((i) => i.id !== props.id);

      //Saving new data to the database
      const database = [values, ...newData];
      window.localStorage.setItem("invoices", JSON.stringify(database));

      //re-render the invoice
      props.data(values);

      //Close the form
      props.formStatus();
    },
  });

  // items counter
  const [items, setItems] = useState([...formik.values.items]);

  // CSS Classes
  const classes = FormStyles();

  if (!props.hide)
    return (
      <div className={classes.Overlay}>
        <div className={classes.Form}>
          <h1>
            Edit <span>#</span>
            {props.id.slice(0, 5).toUpperCase()}
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="wrapper">
              <section className="Bill-from">
                <div className="Title">Bill From</div>
                <div className="street">
                  <label htmlFor="street">Street Address</label>
                  <br />
                  <input
                    required
                    type="text"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    name="street"
                    id="street"
                  />
                </div>
                <div className="flexbox responsive">
                  <div className="first-columm">
                    <label htmlFor="city">City</label>
                    <br />
                    <input
                      required
                      type="text"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      name="city"
                      id="city"
                    />
                  </div>
                  <div className="second-columm">
                    <label htmlFor="post">Post Code</label>
                    <br />
                    <input
                      required
                      type="text"
                      value={formik.values.post}
                      onChange={formik.handleChange}
                      name="post"
                      id="post"
                    />
                  </div>
                  <div className="third-columm">
                    <label htmlFor="country">Country</label>
                    <br />
                    <input
                      required
                      type="text"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      name="country"
                      id="country"
                    />
                  </div>
                </div>
              </section>
              <section className="Bill-To">
                <div className="Title">Bill To</div>
                <div className="name">
                  <label htmlFor="name">Client's Name</label>
                  <br />
                  <input
                    required
                    type="text"
                    value={formik.values.clientName}
                    onChange={formik.handleChange}
                    name="clientName"
                    id="name"
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Client's Email</label>
                  <br />
                  <input
                    required
                    type="email"
                    value={formik.values.clientEmail}
                    onChange={formik.handleChange}
                    name="clientEmail"
                    id="email"
                    placeholder="e.g. email@example.com"
                  />
                </div>
                <div className="clientStreet">
                  <label htmlFor="clientStreet">Street Address</label>
                  <br />
                  <input
                    required
                    type="text"
                    value={formik.values.clientStreet}
                    onChange={formik.handleChange}
                    name="clientStreet"
                    id="clientStreet"
                  />
                </div>
                <div className="flexbox responsive">
                  <div className="first-columm">
                    <label htmlFor="city">City</label>
                    <br />
                    <input
                      required
                      type="text"
                      value={formik.values.clientCity}
                      onChange={formik.handleChange}
                      name="clientCity"
                      id="city"
                    />
                  </div>
                  <div className="second-columm">
                    <label htmlFor="post">Post Code</label>
                    <br />
                    <input
                      required
                      type="text"
                      value={formik.values.clientPost}
                      onChange={formik.handleChange}
                      name="clientPost"
                      id="post"
                    />
                  </div>
                  <div className="third-columm">
                    <label htmlFor="country">Country</label>
                    <br />
                    <input
                      required
                      type="text"
                      value={formik.values.clientCountry}
                      onChange={formik.handleChange}
                      name="clientCountry"
                      id="country"
                    />
                  </div>
                </div>
                <div className="flexbox column-flex">
                  <div className="first-columm responsive-date">
                    <label htmlFor="date">Invoice Date</label>
                    <br />
                    <input
                      required
                      type="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      name="date"
                      id="date"
                    />
                  </div>
                  <div className="second-columm responsive-date">
                    <label htmlFor="payment">Payment Terms</label>
                    <br />
                    <select
                      id="payment"
                      name="payment"
                      onChange={formik.handleChange}
                      value={formik.values.payment}
                    >
                      <option value={1}>Net 1 Days</option>
                      <option value={7}>Net 7 Days</option>
                      <option value={14}>Net 14 Days</option>
                      <option value={30}>Net 30 Days</option>
                    </select>
                  </div>
                </div>
                <div className="description">
                  <label htmlFor="description">Description</label>
                  <br />
                  <input
                    required
                    type="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    id="description"
                    placeholder="e.g. Graphic Design Services"
                  />
                </div>
              </section>
              <section className="itemList">
                <div className="title">ItemList</div>
                <div className="item">
                  {items.map((i) => {
                    return (
                      <div className="flexbox">
                        <div className="first-columm">
                          <label htmlFor="itemName">Item Name</label>
                          <br />
                          <input
                            required
                            type="text"
                            value={i.itemName}
                            onChange={(e) =>
                              setItems((cItem) =>
                                cItem.map((x) =>
                                  x.id === i.id
                                    ? { ...x, itemName: e.target.value }
                                    : x
                                )
                              )
                            }
                            name="itemName"
                            id="itemName"
                          />
                        </div>
                        <div className="second-columm">
                          <label htmlFor="qty">Qty</label>
                          <br />
                          <input
                            required
                            type="text"
                            value={i.qty}
                            onChange={(e) =>
                              setItems((cItem) =>
                                cItem.map((x) =>
                                  x.id === i.id
                                    ? {
                                        ...x,
                                        qty: e.target.value,
                                      }
                                    : x
                                )
                              )
                            }
                            name="qty"
                            id="qty"
                          />
                        </div>
                        <div className="third-columm">
                          <label htmlFor="price">Price</label>
                          <br />
                          <input
                            required
                            type="text"
                            value={i.price}
                            onChange={(e) =>
                              setItems((cItem) =>
                                cItem.map((x) =>
                                  x.id === i.id
                                    ? {
                                        ...x,
                                        price: e.target.value,
                                      }
                                    : x
                                )
                              )
                            }
                            name="price"
                            id="price"
                          />
                        </div>
                        <div className="fourth-columm">
                          <label htmlFor="total">Total</label>
                          <br />
                          <input
                            required
                            type="text"
                            value={i.qty * i.price}
                            name="total"
                            id="total"
                            disabled
                          />
                        </div>
                        <div
                          className="fifth-columm"
                          onClick={(e, id) => {
                            id = i.id;
                            setItems(items.filter((c) => c.id !== id));
                          }}
                        >
                          <i
                            className="fas fa-trash"
                            style={{ pointerEvents: "none" }}
                          ></i>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setItems([
                      ...items,
                      {
                        id: uuidv4(),
                        itemName: "",
                        price: "",
                        qty: "",
                        total: "",
                      },
                    ]);
                  }}
                >
                  + Add New Item
                </button>
              </section>
            </div>
            <div className="options flexbox">
              <div className="btn">
                <button
                  type="button"
                  className="discart-btn"
                  onClick={props.formStatus}
                >
                  Discart
                </button>
              </div>
              <div className="btn">
                <button type="submit" className="save-btn">
                  Save & Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  return null;
}

export default EditForm;
