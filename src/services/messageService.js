import axios from "axios";

const host = "https://6028427cdd4afd001754b238.mockapi.io/";
const endpoint = `${host}/messages`;

const greeting = () => axios.get(`${endpoint}/1`);
const ask = (userInput) => axios.get(`${endpoint}?${userInput}`);
const errorResponse = () => axios.get(`${endpoint}/2`);

const messageService = {
  greeting,
  ask,
  errorResponse,
};

export default messageService;
