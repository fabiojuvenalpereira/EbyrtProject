import axios from 'axios';
const URL = 'http://localHost:3001';

export async function fetchTasks() {
  const response = await fetch(`${URL}`);

  const dataFromGet = await response.json();
  return dataFromGet;
}

export async function makePostToServer(dataToPost) {
  const response = await axios.post(URL, dataToPost);
  console.log(response);
}

export async function makePutToServer(dataToPut) {
  const response = await axios.put(URL, dataToPut);
  console.log(response);
}

export async function makeDeleteToServer(idToDelete) {
  const response = await axios.delete(`${URL}/${idToDelete}`);
  console.log(response);
}

