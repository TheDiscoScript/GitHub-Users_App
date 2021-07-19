import React, { useState } from "react";
import { modifyData } from "../../api/modifyData";
import { useDispatch } from "react-redux";
import { addUser, clearHistory } from "../../users/userSlice";

const Home = () => {
  const dispatch = useDispatch(); //redux toolkit
  const [user, setUser] = useState("");
  //
  const addUserToStore = async (name: string) => {
    const modifiedUser = await modifyData(name);
    dispatch(addUser(modifiedUser));
  };

  return (
    <div>
      home
      <input
        type="text"
        id="textInput"
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <button onClick={() => addUserToStore(user)}>get user data</button>
      <button onClick={() => dispatch(clearHistory())}>clearhistzory</button>
    </div>
  );
};

export default Home;
