import { CLOSE, OPEN } from "../actions/modal.actions";

const INITIAL_STATE = {
  open: false,
  message: "",
};

export default ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN:
      return { ...state, open: true, message: action.message };

    case CLOSE:
      return { ...state, open: false, message: "" };
    default:
      return state;
  }
};
