const URL = 'http://localHost:3001';

export async function fetchTasks() {
  const response = await fetch(`${URL}/`);

  const data = await response.json();
  return data;
}

export async function request(data, methodRequest) {
  const USER_DATE= data;
  const METHOD = {
    method: `${methodRequest}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(USER_DATE)
  }

  const response = await fetch(`${URL}/createTask`, METHOD);
  console.log(response);
}