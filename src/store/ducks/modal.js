/**
 * Action Types
 */

export const Types = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDDEN_MODAL: 'HIDDEN_MODAL',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  visible: false,
  coordinate: null,
};

export default function modals(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { visible: true, coordinate: action.payload.coordinate };
    case Types.HIDDEN_MODAL:
      return {
        visible: false,
        coordinate: null,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  showModal: coordinate => ({
    type: Types.SHOW_MODAL,
    payload: { coordinate },
  }),
  hiddenModal: () => ({
    type: Types.HIDDEN_MODAL,
  }),
};
