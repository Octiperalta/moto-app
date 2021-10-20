import Order from "../../models/Order";
import {
  ADD_ORDER,
  FINISH_CONFIRMATION,
  LOAD_ORDERS,
  START_CONFIRMATION,
} from "../actions/orders.actions";

const INITIAL_STATE = {
  list: [],
  loading: false,
};

export default OrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        action.payload.id,
        action.payload.cartTotal,
        action.payload.trackingCode,
        action.payload.coordinates,
        action.payload.address
      );
      return { ...state, list: state.list.concat(newOrder) };
    case LOAD_ORDERS:
      return {
        ...state,
        list: action.orders.map(
          order =>
            new Order(
              order.id,
              order.totalPrice,
              order.trackingCode,
              { lon: order.longitude, lat: order.latitude },
              order.address,
              order.userID
            )
        ),
      };

    case START_CONFIRMATION:
      return { ...state, loading: true };
    case FINISH_CONFIRMATION:
      return { ...state, loading: false };
    default:
      return state;
  }
};
