import { useState } from "react";
import { useFormik } from "formik";
import { createUseStyles } from "react-jss";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
  // items counter
  const [items, setItems] = useState([]);

  // formik
  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      post: "",
      country: "",
      clientName: "",
      clientEmail: "",
      clientStreet: "",
      clientCity: "",
      clientPost: "",
      clientCountry: "",
      date: "",
      payment: "",
      description: "",
      items: "",
    },
    onSubmit: (values, { resetForm }) => {
      const newItems = [];
      for (let elements of items) {
        elements.total = elements.qty * elements.price;
        newItems.push(elements);
      }

      formik.values.items = [...newItems];
      console.log(values);
      resetForm();
      setItems([]);
    },
  });

  //styles

  const useStyles = createUseStyles({
    Overlay: {
      boxSizing: "border-box",
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.555)",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "2",
      transition: "all 0.4s ease-in-out",
    },
    Form: {
      zIndex: "3",
      boxSizing: "border-box",
      height: "100vh",
      width: "700px",
      backgroundColor: "white",
      padding: "20px 50px",
      borderRadius: "0 50px 50px 0",
      position: "relative",
      left: "130px",
      transition: "all 0.4s ease-in-out",
      "& h1": {
        marginTop: "0",
      },

      "& .wrapper": {
        height: "70vh",
        width: "100%",
        overflow: "scroll",
        margin: {
          bottom: "20px",
          top: "30px",
        },
        "& .Title": {
          color: "#7C5DFA",
          fontWeight: "600",
          marginBottom: "20px",
        },

        "& input": {
          width: "100%",
          height: "40px",
          border: "1px solid lightgray",
          borderRadius: "5px",
          margin: "10px 0",
          boxSizing: "border-box",
          padding: "0 5px",
        },

        "& section": {
          margin: {
            bottom: "20px",
            right: "30px",
          },
        },

        "& .flexbox": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },

        "& .itemList": {
          "& .title": {
            fontSize: "24px",
            marginBottom: "20px",
          },
          "& button": {
            transition: "all 0.4s ease-in-out",
            width: "100%",
            height: "50px",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "rgb(249, 250, 254)",
            fontWeight: "600",
            fontSize: "14px",
            color: "#9277FF",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "#DFE3FA",
            },
          },

          "& input": {
            width: "120px",
          },

          "& .fifth-columm": {
            marginTop: "15px",
            cursor: "pointer",
          },
        },

        "& #payment, & #date": {
          width: "250px",
          height: "40px",
          fontWeight: "bold",
        },
      },
      "& button": {
        cursor: "pointer",
        transition: "all 0.4s ease-in-out",
      },
      "& .options": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        "& button": {
          border: "none",
          padding: "15px",
          borderRadius: "30px",
        },

        "& .discart-btn": {
          color: "#99C0ED",
          backgroundColor: "#F9FAFE",
          "&:hover": {
            backgroundColor: "#DFE3FA",
          },
        },

        "& .draft-btn": {
          color: "#99C0ED",
          backgroundColor: "#363B53",
          marginRight: "10px",
          "&:hover": {
            opacity: "0.9",
          },
        },
        "& .save-btn": {
          color: "#fff",
          backgroundColor: "#7C5DFA",
          marginRight: "10px",
          "&:hover": {
            opacity: "0.9",
          },
        },
      },
    },
  });

  const classes = useStyles();
  // hide form on wrapper click

  return (
    <div
      className={classes.Overlay}
      style={props.hide ? { display: "none" } : { display: "block" }}
    >
      <div className={classes.Form}>
        <h1>Create Invoice</h1>
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
              <div className="flexbox">
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
              <div className="flexbox">
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
              <div className="flexbox">
                <div className="first-columm">
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
                <div className="second-columm">
                  <label htmlFor="payment">Payment Terms</label>
                  <br />
                  <select
                    id="payment"
                    name="payment"
                    onChange={formik.handleChange}
                    value={formik.values.payment}
                  >
                    <option>Net 1 Days</option>
                    <option>Net 7 Days</option>
                    <option>Net 14 Days</option>
                    <option>Net 30 Days</option>
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
                          class="fas fa-trash"
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
              <button type="button" className="draft-btn">
                Save as Draft
              </button>
              <button type="submit" className="save-btn">
                Save & Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
