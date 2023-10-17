import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import reudxThunk from "redux-thunk";

import NumStatusReducer from "./NumStatus/reducer";

// 集合状态
const reducers = combineReducers({
  NumStatusReducer,
});

// redux 调试 dev
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

// 创建数据仓库
// 增加中间件 redux-thunk
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(reudxThunk))
);

export default store;
