import { createStore as _createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../../reducers/index";
import thunk from "redux-thunk";

export let localStore: ReturnType<typeof createStore> = createStore();

export function getOrCreateStore() {
  // Memoize store on client
  if (!localStore) {
    localStore = createStore();
  }
  return localStore;
}

export default function createStore() {
  return _createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
