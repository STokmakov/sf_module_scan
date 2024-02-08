import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "@store/app-reducer";
import authReducer from "@store/auth-reducer";
import userReducer from "@store/user-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  app: appReducer,
  token: authReducer,
  user: userReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export { store }
