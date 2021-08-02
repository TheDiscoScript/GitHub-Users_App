import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaGithub } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <IconButton
        href="https://github.com/Willdooo"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub style={{ color: "black" }} />{" "}
      </IconButton>

      <a
        href="https://linkedin.com/in/daniel-wollmann"
        target="_blank"
        rel="noreferrer"
      >
        Daniel Wollmann
      </a>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  footer: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    textAlign: "center",
  },
}));
export default Footer;
