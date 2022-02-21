import axios from 'axios';
const URL = 'http://localHost:3001';

export async function fetchTasks() {
  const response = await fetch(`${URL}`);

  const data = await response.json();
  return data;
}

export async function makePostToServer(data) {
  const response = await axios.post(URL, data);
  console.log(response);
}

export async function makePutToServer(data) {
  const response = await axios.put(URL, data);
  console.log(response);
}

export async function makeDeleteToServer(id) {
  const response = await axios.delete(`${URL}/${id}`);
  console.log(response);
}

