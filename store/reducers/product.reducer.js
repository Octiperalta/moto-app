import { PRODUCTS } from "../../data/products";
import { FILTER_POPULAR, FILTER_PRODUCT, SELECT_PRODUCT } from "../actions/product.actions";

const INITIAL_STATE = {
  list: PRODUCTS,
  filteredProducts: [],
  popularProducts: [],
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
    case FILTER_POPULAR:
      return {
        ...state,
        popularProducts: state.list.filter(prod => prod.isPopular),
      };

    default:
      return state;
  }
};

export default ProductReducer;
