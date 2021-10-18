import axios from "axios";
import { URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from "../../constants/database";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";
export const ERROR = "ERROR";

export const signup = (email, password) => {
  return async dispatch => {
    dispatch({ type: START_LOADING });

    try {
      const response = await axios.post(URL_AUTH_SIGNUP, {
        email,
        password,
        returnSecureToken: true,
      });

      const { data } = response;

      dispatch({ type: SIGNUP, token: data.idToken, userId: data.localId });
    } catch (err) {
      dispatch({
        type: ERROR,
        message: "Email or password is incorrect. Please try again.",
      });
    } finally {
      dispatch({ type: FINISH_LOADING });
    }
  };
};

export const login = (email, password) => {
  return async dispatch => {
    dispatch({ type: START_LOADING });
    dispatch({ type: ERROR, message: null });

    try {
      const response = await axios.post(URL_AUTH_SIGNIN, { email, password });
      const { data } = response;
      dispatch({ type: SIGNUP, token: data.idToken, userId: data.localId });
    } catch (err) {
      dispatch({
        type: ERROR,
        message: "Email or password is incorrect. Please try again.",
      });
    } finally {
      dispatch({ type: FINISH_LOADING });
    }
  };
};
