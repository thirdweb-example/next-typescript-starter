import createReducer from "../utils/redux/createReducer";

export enum ActionType {
  SET_USER_DOCUMENT = "SET_USER_DOCUMENT",
}

export interface UserState {
  address: Array<any>;
}

const initialState: UserState = {
  address: [],
};

export default createReducer<UserState>(initialState, {
  [ActionType.SET_USER_DOCUMENT](
    state: UserState,
    payload: unknown
  ): UserState {
    return {
      ...state,
      address: payload as Array<any>,
    };
  },
});
