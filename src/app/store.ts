import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import throttle from "lodash.throttle";
import { saveState, loadState } from "../features/users/localStorage";
import userReducer from "../features/users/userSlice";

//Redux store for state management
//Only one reducer (database), as most of the logic will only
//interact with database
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  preloadedState: loadState(),
});
// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(throttle(() => saveState(store.getState()), 1000));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
