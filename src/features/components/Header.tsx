import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  const classes = useStyles(); //styling

  return (
    <div className={classes.container}>
      {" "}
      <Typography variant="h1" gutterBottom>
        GitHub <br /> User Finder
      </Typography>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  container: { paddingTop: "3rem" },
}));
export default Header;
