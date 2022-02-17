import axios from 'axios';
const URL = 'http://localHost:3001';

export async function fetchTasks() {
  const response = await fetch(`${URL}`);

  const data = await response.json();
  return data;
}

export async function request(data) {
  const response = await axios.post(URL, data);
  console.log(response);
}