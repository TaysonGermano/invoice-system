import { createUseStyles } from "react-jss";

export default function Filter() {
  return (
    <div className="Filter">
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
