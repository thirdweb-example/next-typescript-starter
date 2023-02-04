import actionCreator from "../utils/redux/actionCreator";
import { Dispatch } from "../utils/redux/dispatch";
import { ActionType } from "../reducers/userInfo";

export const setDocumentsFetched = (documentsFetched: boolean) => {
  actionCreator(
    "setDocumentsFetched",
    async (dispatch: Dispatch): Promise<void> => {
      dispatch({
        type: ActionType.SET_DOCUMENTS_FETCHED,
        payload: documentsFetched
      });
    }
  );
}

export const setDocuments = (documents: any) => {
  actionCreator(
    "setDocumentsFetched",
    async (dispatch: Dispatch): Promise<void> => {
      dispatch({
        type: ActionType.SET_DOCUMENTS,
        payload: documents
      });
    }
  );
}