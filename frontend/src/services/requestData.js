const generateDate = () => {
  return 
};

const generateObjectToSend = (_id, userName, taskContent, status) => {
  const data = {
    _id,
    userName,
    taskContent,
    date: generateDate(),
    status,
  };

  return data
}

export default generateObjectToSend
