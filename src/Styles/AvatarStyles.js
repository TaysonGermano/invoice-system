import { createUseStyles } from "react-jss";

export default function AvatarStyles() {
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
  return classes;
}
