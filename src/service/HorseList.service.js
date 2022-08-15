import axios from 'axios';

const LIST_API_BASE_URL = 'http://localhost:3016/horse/';

export default function getHorses() {
  return axios.get(LIST_API_BASE_URL);
}

export function getHorsebyId(horseId) {
  return axios.get(LIST_API_BASE_URL + horseId);
}
