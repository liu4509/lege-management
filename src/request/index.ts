import axios from "axios";

const instance = axios.create({
  // 基本请求路由抽取
  baseURL: "http://xue.cnkdl.cn:23683",
  // 请求的过期时间
  timeout: 20000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
