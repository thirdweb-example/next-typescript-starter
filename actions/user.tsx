import actionCreator from "../utils/redux/actionCreator";
import { Dispatch } from "../utils/redux/dispatch";
import { ActionType } from "../reducers/userInfo";

export const setUserAddress = (address: string) => {
  actionCreator(
    "setUserAddress",
    async (dispatch: Dispatch): Promise<void> => {
      dispatch({
        type: ActionType.SET_USER_ADDRESS,
        payload: address
      });
    }
  );
}