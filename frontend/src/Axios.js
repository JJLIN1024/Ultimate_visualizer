import _axios from "axios";

const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL: 'http://localhost:5000', //JSON-Server端口位置
  });
  return instance;
}

export default axios;