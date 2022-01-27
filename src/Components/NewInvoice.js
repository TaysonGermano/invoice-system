import NewInvoiceStyles from "../Styles/NewInvoiceStyles";

export default function NewInvoice(props) {
  const classes = NewInvoiceStyles();
  return (
    <button className={classes.invoiceBtn} onClick={props.showForm}>
      <div className={classes.icon}>
        <i className="fas fa-plus"></i>
      </div>
      <div className={classes.text}>New Invoice</div>
    </button>
  );
}
