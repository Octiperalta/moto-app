import {
  ADD_ITEM,
  CLEAR_CART,
  FINISH_CONFIRMATION,
  REMOVE_ITEM,
  START_CONFIRMATION,
} from "../actions/cart.actions";

const INITIAL_STATE = {
  items: [],
  total: 0,
  loading: false,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.item),
        total: state.total + Number(action.item.price),
      };

    case REMOVE_ITEM:
      const itemPrice = state.items.find(
        item => item.id === action.itemID
      ).price;

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemID),
        total: state.total - Number(itemPrice),
      };

    case CLEAR_CART:
      return INITIAL_STATE;
    case START_CONFIRMATION:
      return { ...state, loading: true };
    case FINISH_CONFIRMATION:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default CartReducer;
