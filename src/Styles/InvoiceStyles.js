import { createUseStyles } from "react-jss";
export default function InvoiceStyles() {
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

      "@media screen and (max-width: 730px)": {
        "& .details": {
          width: "350px",
        },

        "& .price-status": {
          width: "230px",
          marginLeft: "15px",

          "& .Invoice-status": {
            margin: "0 10px",
          },
        },
      },

      "@media screen and (max-width: 590px)": {
        "&": {
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",

          "& .Invoice-arrow": {
            display: "none",
          },
        },
      },
    },
  });

  const classes = useStyles();
  return classes;
}
