// 全局声明
// 不要使用 es6 的引用 import ... from ...

type RootState = ReturnType<typeof import("@/store").getstate>;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}
