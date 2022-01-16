import image from "../blackPhanter.jpg";
import { createUseStyles } from "react-jss";

export default function Avatar() {
  return (
    <div className="Avatar">
      <img src={image} alt="Avatar"></img>
    </div>
  );
}
