import { createUseStyles } from "react-jss";

export default function FormStyles() {
  //styles

  const useStyles = createUseStyles({
    Overlay: {
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.555)",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "2",
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
      "& h1": {
        marginTop: "0",
      },

      ".dark &": {
        backgroundColor: "#141625",

        "& input": {
          backgroundColor: "#1E2139",
          border: "1px solid #1E2139",
        },

        "& .itemList": {
          color: "#777F98",
          "& button": {
            backgroundColor: "rgb(37, 41, 69)",
          },
        },
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
    ".dark input": {
      backgroundColor: "#1E2139",
    },
  });

  const classes = useStyles();
  return classes;
}
