import { CombinedState, combineReducers } from "redux";
import createReducer from "../utils/redux/createReducer";

import user, { UserState } from "./userInfo";

export interface StoreState {
  user: UserState;
}

export default combineReducers<CombinedState<StoreState>>({
  user
})
