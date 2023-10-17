import ReactDOM from "react-dom/client";
// 导入清除全部样式库 初始化放在前面
import "reset-css";
// UI 框架样式
import "antd/dist/antd.css";
// 全局样式
import "@/assets/styles/global.scss";
// 组件样式 样式顺序很重要 涉及样式覆盖

// import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// 状态管理
import { Provider } from "react-redux";
import store from "@/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
