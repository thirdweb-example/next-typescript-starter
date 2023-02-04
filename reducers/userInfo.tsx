import createReducer from "../utils/redux/createReducer";

export enum ActionType {
  SET_DOCUMENTS_FETCHED = "SET_DOCUMENTS_FETCHED",
  SET_DOCUMENTS = "SET_DOCUMENTS"
}

export interface UserState {
  documentsFetched: boolean;
  documents: any
}

const initialState: UserState = {
  documentsFetched: false,
  documents: []
}

export default createReducer<UserState>(initialState, {
  [ActionType.SET_DOCUMENTS_FETCHED](state: UserState, payload: unknown): UserState {
    return {
      ...state,
      documentsFetched: payload as boolean
    };
  },
  [ActionType.SET_DOCUMENTS](state: UserState, payload: unknown): UserState {
    return {
      ...state,
      documents: payload as any[]
    };
  }
});