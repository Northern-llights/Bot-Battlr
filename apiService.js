import axios from "axios";

const API_URL = "http://localhost:3001/bots";

export async function fetchBots() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function deleteBot(botId) {
  await axios.delete(`${API_URL}/${botId}`);
}
