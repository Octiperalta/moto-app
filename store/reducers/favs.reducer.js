import { ADD_ITEM_FAV, REMOVE_ITEM_FAV } from "../actions/favs.actions";

const INITIAL_STATE = {
  items: [],
};

const FavoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_FAV:
      return {
        ...state,
        items: state.items.concat(action.item),
      };

    case REMOVE_ITEM_FAV:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemID),
      };
    default:
      return state;
  }
};

export default FavoritesReducer;
