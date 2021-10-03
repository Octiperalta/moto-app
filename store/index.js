import { createStore, combineReducers, applyMiddleware } from "redux";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import FavoritesReducer from "./reducers/favs.reducer";
import ProductReducer from "./reducers/product.reducer";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";
import OrdersReducer from "./reducers/orders.reducer";

const RootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  categories: CategoryReducer,
  favorites: FavoritesReducer,
  auth: AuthReducer,
  orders: OrdersReducer 
});

export default createStore(RootReducer, applyMiddleware(thunk));
