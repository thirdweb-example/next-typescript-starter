import { ThunkDispatch } from "redux-thunk";
import { StoreState as State } from "@reducers/index";

export interface Action {
  type: string;
  payload?: unknown;
}

export type Dispatch = ThunkDispatch<State, Record<string, unknown>, Action>;
export type GetState = () => State;
