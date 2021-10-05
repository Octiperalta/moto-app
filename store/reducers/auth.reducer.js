import { FINISH_LOADING, SIGNUP, START_LOADING } from "../actions/auth.actions";

const INITIAL_STATE = {
  token: null,
  // Cuando este integrada el login correctamente este valor ya no estara harcodeado y pasara a hacer el ID que proporciona Firebase
  userId: 5,
  loading: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case FINISH_LOADING:
      return { ...state, loading: false };
    case SIGNUP:
      return { ...state, token: action.token, userId: action.userId };
    default:
      return state;
  }
};

export default AuthReducer;
