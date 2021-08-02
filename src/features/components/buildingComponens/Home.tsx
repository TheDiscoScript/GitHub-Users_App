import React, { useState } from "react";
import { Link } from "react-router-dom";
import { modifyData } from "../../api/modifyData";
import { useDispatch } from "react-redux";
import { addUser } from "../../users/userSlice";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const Home = () => {
  const dispatch = useDispatch(); //redux toolkit
  const classes = useStyles(); //styling
  const [user, setUser] = useState("");
  //
  const addUserToStore = async (name: string) => {
    const modifiedUser = await modifyData(name);
    dispatch(addUser(modifiedUser));
  };

  return (
    <div className={classes.container}>
      <TextField
        className={classes.textField}
        variant="outlined"
        onChange={(e) => setUser(e.target.value)}
      />
      <Link to={`/user/${user}`}>
        <button onClick={() => addUserToStore(user)}>get user data</button>
      </Link>
      <Link to="/history">
        <button>History</button>
      </Link>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: { minWidth: "400px", width: "auto" },
}));

export default Home;
