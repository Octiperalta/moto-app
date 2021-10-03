import axios from "axios";
import { URL_AUTH_SIGNUP } from "../../constants/database";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";

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
      throw err;
    } finally {
      dispatch({ type: FINISH_LOADING });
    }
  };
};
