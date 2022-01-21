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
      border: "1px solid #fff",
      transition: "all 0.3s ease-in-out",

      "&:hover, .dark &:hover": {
        cursor: "pointer",
        border: "1px solid #7C5DFA",
      },

      ".dark &": {
        backgroundColor: "#1E2139",
        border: "1px solid #1E2139",
      },

      "& .details, & .price-status": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",

        "& .Invoice-id": {
          fontWeight: "600",
          color: "#000",
          "& span": {
            color: "#7C5DFA",
          },
        },
      },

      ".dark & .Invoice-id, .dark & .Invoice-price": {
        color: "#fff !important",
      },

      ".dark & .Draft": {
        color: "inherit",
        backgroundColor: "rgba(223, 227, 250, 0.06)",
        "& span": {
          backgroundColor: "#FFF",
        },
      },

      "& .price-status": {
        width: "35%",
      },

      "& .Invoice-price": {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#000",
      },

      "& .Pending": {
        color: "#FF8F00",
        backgroundColor: "rgba(255, 143, 0, 0.06)",
        "& span": {
          backgroundColor: "#FF8F00",
        },
      },

      "& .Paid": {
        color: "#33D69F",
        backgroundColor: "rgba(51, 214, 159, 0.06)",
        "& span": {
          backgroundColor: "#33D69F",
        },
      },

      "& .Draft": {
        color: "#373B53",
        backgroundColor: "rgba(55, 59, 83, 0.06)",
        "& span": {
          backgroundColor: "#373B53",
        },
      },

      "& .Invoice-status": {
        padding: "10px 0px",
        width: "110px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& span": {
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "20px",
          margin: {
            right: "8px",
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
          <span>#</span>
          {props.id}
        </div>
        <div className="Invoice-date">{props.date}</div>
        <div className="Invoice-name">{props.name}</div>
      </div>
      <div className="price-status">
        <div className="Invoice-price">R{props.price}</div>
        <div className={`Invoice-status ${props.status}`}>
          <span className="status"></span>
          <div>{props.status}</div>
        </div>
        <div className="Invoice-arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
