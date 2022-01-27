import FilterStyles from "../Styles/FilterStyles";

export default function Filter(props) {
  //change state
  const changeState = (e) => {
    props.change(e.target.value);
  };

  const classes = FilterStyles();

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
