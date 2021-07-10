import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

// export interface CounterState {
//     value: number;
//     status: 'idle' | 'loading' | 'failed';
//   }

//   const initialState: CounterState = {
//     value: 0,
//     status: 'idle',
//   };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    clearHistory(state, action) {},
    //   addAstronaut: {
    //     reducer(state, action) {
    //       //I can do this thanks to createSlice-Redux toolkit
    //       //This shouldn't/cannot be done in basic Redux
    //       console.log("The action is: ");
    //       console.log(action);
    //       state.push(action.payload);
    //     },
    //     prepare(firstName, lastName, birth, superPower, text) {
    //       return {
    //         payload: {
    //           //randomID
    //           id: nanoid(),
    //           firstName,
    //           lastName,
    //           birth,
    //           superPower,
    //           text,
    //         },
    //       };
    //     },
    //   },

    //   removeAstronaut(state, action) {
    //     const id = action.payload;
    //     //testing for myself to better understand the logic behit reduxtoolkit
    //     console.log(action); //Object { type: "database/removeAstronaut", payload: "0" }
    //     console.log(action.payload); //0
    //     console.log(id); // 0
    //     //simple filter function that returns all items except item with certain ID
    //     return state.filter((astronaut) => astronaut.id !== id);
    //   },

    //   editAstronaut(state, action) {
    //     const { id, firstName, lastName, birth, superPower, text } =
    //       action.payload;
    //     console.log("Action payload is: " + action.payload);
    //     const editingAstronaut = state.find((astronaut) => astronaut.id === id);
    //     if (editingAstronaut) {
    //       console.log("astronaut found");
    //       editingAstronaut.firstName = firstName;
    //       editingAstronaut.lastName = lastName;
    //       editingAstronaut.birth = birth;
    //       editingAstronaut.superPower = superPower;
    //       editingAstronaut.text = text;
    //     } else {
    //       console.log("no astronaut found");
    //     }
    //   },
    //   clearAll(state, action) {
    //     //not sure if this is the proper way to do things, but it works
    //     return (state = []);
    //   },
    //   //not sure if this is the proper way to do things, but it works
    //   addDummies(state, action) {
    //     dummies.forEach((dummy) => state.push(dummy));
    //     // return state.push(dummies);
    //   },
  },
});
export const { addUser, removeUser, clearHistory } = usersSlice.actions;

export default usersSlice.reducer;
