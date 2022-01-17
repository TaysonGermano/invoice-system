import image from "../blackPhanter.jpg";
import { createUseStyles } from "react-jss";

export default function Avatar() {
  const useStyles = createUseStyles({
    Avatar: {
      width: "50px",
      height: "50px",

      "& img": {
        width: "100%",
        borderRadius: "50px",
      },
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.Avatar}>
      <img src={image} alt="Avatar"></img>
    </div>
  );
}
