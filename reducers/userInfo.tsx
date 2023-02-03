import createReducer from "../utils/redux/createReducer";

export enum ActionType {
  SET_USER_ADDRESS = "SET_USER_ADDRESS"
}

export interface UserState {
  address: string;
}

const initialState: UserState = {
  address: ""
}

export default createReducer<UserState>(initialState, {
  [ActionType.SET_USER_ADDRESS](state: UserState, payload: unknown): UserState {
    return {
      ...state,
      address: payload as string
    };
  }
});