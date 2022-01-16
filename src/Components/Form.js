import { useState } from "react";
import { createUseStyles } from "react-jss";

export default function Form(props) {
  //price, qty and total states
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  // items counter
  const [items, setItems] = useState([]);

  //set itemlist
  const itemForm = (
    <div className="flexbox">
      <div className="first-columm">
        <label htmlFor="itemName">Item Name</label>
        <br />
        <input
          required
          type="text"
          value={props.clientitemName}
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
          value={props.qty}
          name="qty"
          id="qty"
          onChange={(e) => setQty(e.target.value)}
        />
      </div>
      <div className="third-columm">
        <label htmlFor="price">Price</label>
        <br />
        <input
          required
          type="text"
          value={props.price}
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="fourth-columm">
        <label htmlFor="total">Total</label>
        <br />
        <input
          required
          type="text"
          value={qty * price}
          name="total"
          id="total"
          disabled
        />
      </div>
      <div className="fifth-columm">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  );

  return (
    <div className="Form">
      <h1>Create Invoice</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <section>
          <div className="Title">Bill From</div>
          <div className="street">
            <label htmlFor="street">Street Address</label>
            <br />
            <input
              required
              type="text"
              value={props.street}
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
                value={props.city}
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
                value={props.post}
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
                value={props.country}
                name="country"
                id="country"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="Title">Bill To</div>
          <div className="name">
            <label htmlFor="name">Client's Name</label>
            <br />
            <input
              required
              type="text"
              value={props.name}
              name="name"
              id="name"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Client's Email</label>
            <br />
            <input
              required
              type="email"
              value={props.email}
              name="email"
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
              value={props.clientStreet}
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
                value={props.clientCity}
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
                value={props.clientPost}
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
                value={props.clientCountry}
                name="country"
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
                value={props.date}
                name="date"
                id="date"
              />
            </div>
            <div className="second-columm">
              <label htmlFor="payment">Payment Terms</label>
              <br />
              <select id="payment">
                <option value={1}>Net 1 Days</option>
                <option value={7}>Net 7 Days</option>
                <option value={14}>Net 14 Days</option>
                <option value={30} selected>
                  Net 30 Days
                </option>
              </select>
            </div>
          </div>
          <div className="description">
            <label htmlFor="description">Description</label>
            <br />
            <input
              required
              type="description"
              value={props.description}
              name="description"
              id="description"
              placeholder="e.g. Graphic Design Services"
            />
          </div>
        </section>
        <section className="itemList">
          <div className="title">ItemList</div>
          <div className="item">{items.map((i) => itemForm)}</div>
          <button onClick={() => setItems([...items, "add"])}>
            + Add New Item
          </button>
        </section>
      </form>
      <div className="options flexbox">
        <div className="btn">
          <button>Discart</button>
        </div>
        <div className="btn">
          <button>Save as Draft</button>
          <button>Save & Send</button>
        </div>
      </div>
    </div>
  );
}
