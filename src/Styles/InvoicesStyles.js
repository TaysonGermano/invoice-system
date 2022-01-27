import { createUseStyles } from "react-jss";

export default function InvoicesStyle() {
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

  const classes = useStyles();
  return classes;
}
