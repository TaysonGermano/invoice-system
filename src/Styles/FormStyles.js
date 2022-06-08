import { createUseStyles } from "react-jss";

export default function FormStyles() {
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
    },

    Form: {
      zIndex: "3",
      boxSizing: "border-box",
      height: "100vh",
      width: "700px",
      backgroundColor: "white",
      padding: "20px 50px",
      borderRadius: "0 50px 50px 0",
      position: "fixed",
      left: "130px",
      "& h1": {
        marginTop: "0",
      },

      ".dark &": {
        backgroundColor: "#141625",

        "& input": {
          backgroundColor: "#1E2139",
          border: "1px solid #1E2139",
          color: "#fff",
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
        overflowX: "hidden",
        margin: {
          bottom: "20px",
          top: "30px",
        },

        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
          backgroundColor: "#F5F5F5",
        },

        "&::-webkit-scrollbar": {
          width: "8px",
          backgroundColor: "#F5F5F5",
        },

        "&::-webkit-scrollbar-thumb": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
          backgroundColor: "#7C5DFA",
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
          color: "#fff",
          backgroundColor: "rgb(236, 87, 87)",
          "&:hover": {
            opacity: "0.8",
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

      ".dark & #payment": {
        color: "#fff",
        backgroundColor: "#1E2139",
      },

      "@media screen and (max-width: 890px)": {
        "&": {
          borderRadius: "10px",
          height: "600px",
          width: "90%",
          position: "relative",
          left: "0",
          top: "100px",
          margin: "20px auto",

          "& .responsive .second-columm": {
            margin: "0px 10px",
          },
        },
      },

      "@media screen and (max-width: 750px)": {
        "& .column-flex": {
          flexDirection: "column",
          alignItems: "flex-start !important",
        },
      },
    },
  });

  const classes = useStyles();
  return classes;
}
