import Order from "../../models/Order";
import { ADD_ORDER, LOAD_ORDERS } from "../actions/orders.actions";

const INITIAL_STATE = {
  list: [],
};

export default OrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        action.payload.id,
        action.payload.cartTotal,
        action.payload.trackingCode
      );
      return { ...state, list: state.list.concat(newOrder) };
    case LOAD_ORDERS:
      return {
        ...state,
        list: action.orders.map(
          order => new Order(order.id, order.totalPrice, order.trackingCode)
        ),
      };

    default:
      return state;
  }
};
