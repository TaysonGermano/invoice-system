import { createUseStyles } from "react-jss";

export default function Filter(props) {
  const useStyles = createUseStyles({
    Filter: {
      "& select": {
        padding: "10px 20px",
        backgroundColor: "inherit",
        border: "none",
        borderBottom: "1px solid #7C5DFA",
      },
      ".dark & select": {
        color: "#fff",
      },
    },
  });

  //change state
  const changeState = (e) => {
    props.change(e.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.Filter}>
      <select onChange={changeState}>
        <option value="All" defaultValue>
          Filter by status
        </option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
        <option value="Draft">Draft</option>
      </select>
    </div>
  );
}
