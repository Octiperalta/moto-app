import { CATEGORIES } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.actions";

const INITIAL_STATE = {
  list: CATEGORIES,
  selectedID: null,
};

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, selectedID: action.categoryID };

    default:
      return state;
  }
};

export default CategoryReducer;
