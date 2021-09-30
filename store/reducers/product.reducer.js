import { PRODUCTS } from "../../data/products";
import { FILTER_PRODUCT, SELECT_PRODUCT } from "../actions/product.actions";

const INITIAL_STATE = {
  list: PRODUCTS,
  filteredProducts: [],
  selectedID: null,
};

const ProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return { ...state, selectedID: action.productID };

    case FILTER_PRODUCT:
      return {
        ...state,
        filteredProducts: state.list.filter(
          product => product.category.id === Number(action.categoryID)
        ),
      };

    default:
      return state;
  }
};

export default ProductReducer;
