interface Action {
  type: string;
  payload: unknown;
}

type Handlers<State> = {
  [type: string]: (state: State, payload: unknown) => State;
};

export default function createReducer<T>(
  initialState: T,
  handlers: Handlers<T>
) {
  return function reducer(state: T = initialState, action: Action): T {
    if (handlers.hasOwnProperty(action.type)) {
      const newState = handlers[action.type](state, action.payload);
      return newState;
    } else {
      return state;
    }
  };
}
