import { createUseStyles } from "react-jss";

export default function Filter() {
  const useStyles = createUseStyles({
    Filter: {
      "& select": {
        padding: "10px 20px",
        backgroundColor: "inherit",
        border: "none",
        borderBottom: "1px solid #7C5DFA",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.Filter}>
      <select>
        <option value="Filter" selected>
          Filter by status
        </option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="draft">Draft</option>
      </select>
    </div>
  );
}
