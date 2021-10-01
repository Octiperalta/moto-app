import { createStore, combineReducers } from "redux";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import FavoritesReducer from "./reducers/favs.reducer";
import ProductReducer from "./reducers/product.reducer";

const RootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  categories: CategoryReducer,
  favorites: FavoritesReducer
});

export default createStore(RootReducer);
