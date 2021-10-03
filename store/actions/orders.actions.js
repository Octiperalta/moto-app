import { getOrdersByUserId } from "../../db";

export const ADD_ORDER = "ADD_ORDER";
export const LOAD_ORDERS = "LOAD_ORDERS";

export const loadOrders = id => {
  return async dispatch => {
    try {
      const result = await getOrdersByUserId(id);
      dispatch({ type: LOAD_ORDERS, orders: result.rows._array });
    } catch (err) {
      console.log(err.message);
    }
  };
};
