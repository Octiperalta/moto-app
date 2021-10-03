import { createOrder } from "../../db";
import { ADD_ORDER } from "./orders.actions";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const START_CONFIRMATION = "START_CONFIRMATION";
export const FINISH_CONFIRMATION = "FINISH_CONFIRMATION";
export const CLEAR_CART = "CLEAR_CART";

export const addItem = item => ({ type: ADD_ITEM, item });
export const removeItem = itemID => ({ type: REMOVE_ITEM, itemID });

export const confirmCart = (cartTotal, userId) => {
  return async dispatch => {
    try {
      const trackingCode = Date.now().toString();
      const result = await createOrder(cartTotal, userId, trackingCode);

      dispatch({
        type: ADD_ORDER,
        payload: { id: result.insertId, cartTotal, trackingCode },
      });
    } catch (err) {
      throw err;
    }
  };
};
