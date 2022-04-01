import generateDate from './generateDate';

const generateObjectToSend = async (userName, taskContent, statusTask) => {
  const data = {
    userName,
    taskContent,
    date: await generateDate(),
    statusTask,
  };

  return data;
};

export default generateObjectToSend;
