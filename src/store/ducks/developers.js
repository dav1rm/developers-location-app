/**
 * Action Types
 */

export const Types = {
  ADD_REQUEST: 'ADD_DEVELOPER_REQUEST',
  ADD_SUCCESS: 'ADD_DEVELOPER_SUCCESS',
  ADD_FAILURE: 'ADD_DEVELOPER_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function developers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
        error: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  addDevelopersRequest: (username, coordinate) => ({
    type: Types.ADD_REQUEST,
    payload: { username, coordinate },
  }),
  addDevelopersSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addDevelopersFailure: () => ({
    type: Types.ADD_FAILURE,
  }),
};
