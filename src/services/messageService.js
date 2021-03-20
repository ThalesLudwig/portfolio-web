import axios from "axios";
import HOST from "../config/host";

const get = (data, lang) => {
  return axios.post(HOST || process.env.AIDEN_HOST, {
    data,
    lang,
  });
};

const messageService = {
  get,
};

export default messageService;
