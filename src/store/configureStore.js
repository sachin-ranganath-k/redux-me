import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducer from "../reducer/reducer";
import cityReducer from "../admin/admin-reducer/AdminReducer"



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(
    combineReducers({
      userss: reducer,  //The userss has been passed to useSelector()
      cities:cityReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

export default configureStore;
