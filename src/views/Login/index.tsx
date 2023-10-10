import { useEffect } from "react";

import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import { Button, Input, Space } from "antd";
import "./index.css";

// 组件加载后加载背景
const Login = () => {
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);
  return (
    <div className={styles.loginPage}>
      {/* 背景 */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      <div className={styles.loginBox + " loginBox"}>
        {/* 登录盒子 */}
        <div className={styles.title}>
          <h1>通用后台管理系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className="from">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Input placeholder="用户" />
            <Input.Password placeholder="密码" />
            <Button type="primary" block>
              Primary
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Login;
