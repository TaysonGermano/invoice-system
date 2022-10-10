import { Link } from "react-router-dom";

export default function PageNotFound() {
  document.title = `Page not found - Invoice App`;
  return (
    <div
      className="NotFound"
      style={{ margin: "0 auto", color: "inherit", textAlign: "center" }}
    >
      <h1>No match found</h1>
      <p>
        There was no content found at this route please press the link bellow to
        see your invoices
      </p>
      <Link to="/">Invoices</Link>
    </div>
  );
}
