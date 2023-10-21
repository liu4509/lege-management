import request from "./index";

// 请求验证码图片地址
export const captchaAPI = () => {
  return request.get("/prod-api/captchaImage");
};
