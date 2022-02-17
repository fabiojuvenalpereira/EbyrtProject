const URL = 'http://localHost:3001';

export async function fetchTasks() {
  const response = await fetch(`${URL}`);

  const data = await response.json();
  return data;
}

export async function request(data) {
  const USER_DATE= data;
  const METHOD = {
    method: `POST`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(USER_DATE)
  }

  const response = await fetch(`${URL}`, METHOD);
  console.log(response);
}