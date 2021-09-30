import { createStore, combineReducers } from "redux";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import ProductReducer from "./reducers/product.reducer";

const RootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  categories: CategoryReducer,
});

export default createStore(RootReducer);
