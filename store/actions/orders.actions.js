import { createOrder, getOrdersByUserId } from "../../db";

export const ADD_ORDER = "ADD_ORDER";
export const LOAD_ORDERS = "LOAD_ORDERS";
export const START_CONFIRMATION = "START_CONFIRMATION";
export const FINISH_CONFIRMATION = "FINISH_CONFIRMATION";

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

export const confirmOrder = (cartTotal, userId, coordinates, address) => {
  return async dispatch => {
    dispatch({ type: START_CONFIRMATION });
    try {
      const trackingCode = Date.now().toString();
      const result = await createOrder(
        cartTotal,
        userId,
        trackingCode,
        coordinates,
        address
      );


      dispatch({
        type: ADD_ORDER,
        payload: {
          id: result.insertId,
          cartTotal,
          trackingCode,
          coordinates,
          address,
          userId,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};
