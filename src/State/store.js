import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import { thunk } from "redux-thunk"; // Correct named import
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducers";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Order/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  products: customerProductReducer,
  cart: cartReducer,
  order:orderReducer,
  adminOrder:adminOrderReducer
});

// Compose enhancers to include both middleware and Redux DevTools extension
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
