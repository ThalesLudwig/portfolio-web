import axios from "axios";
import HOST from "../config/host";

const get = (data, lang) =>
  axios.post(HOST, {
    data,
    lang,
  });

const messageService = {
  get,
};

export default messageService;
