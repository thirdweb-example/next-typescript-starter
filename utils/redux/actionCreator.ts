import { Dispatch } from "./dispatch";

import { localStore } from "../redux/createStore";

import { AxiosError } from "axios";

const { dispatch } = localStore;

const actionCreator = async function <T>(
  key: string,
  actionDispatcher: (d: Dispatch) => Promise<T>
): Promise<T | undefined> {


  try {
    const result = await actionDispatcher(dispatch);

    return result;
  } catch (e) {

    return (e as AxiosError<T>).response?.data;
  }
};

export default actionCreator;
