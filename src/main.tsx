import React from "react";
import ReactDOM from "react-dom/client";
// 导入清除全部样式库 初始化放在前面
import "reset-css";
// UI 框架样式
// 全局样式
import "./assets/styles/global.scss";
// 组件样式 样式顺序很重要 涉及样式覆盖

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
