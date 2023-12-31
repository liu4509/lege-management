import { useEffect } from "react";

import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import { Button, Input, Space } from "antd";
import "./index.css";

import { captchaAPI } from "@/request/api.ts";

// 组件加载后加载背景
const Login = () => {
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);

  // 验证码请求
  const getCaptchaBox = () => {
    // 调用 API
    captchaAPI().then((res) => {
      console.log(res);
    });
    alert(5);
  };

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
            {/* 验证码 */}
            <div className="captchaBox" onClick={getCaptchaBox}>
              <Input placeholder="验证码" />
              <div className="captchaImg">
                <img src="" alt="" />
              </div>
            </div>
            <Button type="primary" className="loginBtn" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Login;
