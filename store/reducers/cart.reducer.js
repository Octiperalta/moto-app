import { ADD_ITEM, REMOVE_ITEM } from "../actions/cart.actions";

const INITIAL_STATE = {
  items: [],
  total: 0,
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
      console.log("🚀 ~ file: cart.reducer.js ~ line 22 ~ CartReducer ~ action.itemID", action.itemID)
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemID),
        total: state.total - Number(itemPrice),
      };
    default:
      return state;
  }
};

export default CartReducer;
