import { createUseStyles } from "react-jss";

export default function Invoice(props) {
  const useStyles = createUseStyles({
    Invoice: {
      padding: "15px 20px",
      backgroundColor: "white",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      cursor: "pointer",

      "& .details, & .price-status": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",

        "& .Invoice-id": {
          fontWeight: "500",
          "& span": {
            color: "#7C5DFA",
          },
        },
      },

      "& .price-status": {
        width: "35%",
      },

      "& .Invoice-price": {
        fontWeight: "bold",
        fontSize: "20px",
      },

      "& .Invoice-status": {
        padding: "10px 35px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& span": {
          display: "inline-block",
          width: "10px",
          height: "10px",
          borderRadius: "20px",
          margin: {
            right: "10px",
          },
        },
      },

      "& .Invoice-arrow": {
        color: "#7C5DFA",
      },
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.Invoice}>
      <div className="details">
        <div className="Invoice-id">
          <span>#</span>TY555{props.id}
        </div>
        <div className="Invoice-date">Due 21 Jan 2022{props.date}</div>
        <div className="Invoice-name">Tyson Monteiro{props.name}</div>
      </div>
      <div className="price-status">
        <div className="Invoice-price">R56,000{props.price}</div>
        <div className="Invoice-status">
          <span className="status"></span>
          <div>Paid{props.status}</div>
        </div>
        <div className="Invoice-arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
