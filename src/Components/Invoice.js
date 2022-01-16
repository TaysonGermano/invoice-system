import { createUseStyles } from "react-jss";

export default function Invoice(props) {
  return (
    <div>
      <div className="details">
        <div className="Invoice-id">{props.id}</div>
        <div className="Invoice-date">{props.date}</div>
        <div className="Invoice-name">{props.name}</div>
      </div>
      <div className="price-status">
        <div className="Invoice-price">{props.price}</div>
        <div className="Invoice-status">
          <span className="status"></span> {props.status}
        </div>
        <div className="Invoice-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
