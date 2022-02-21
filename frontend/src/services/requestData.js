import moment from 'moment';

const generateDate = () => {
  const date = moment().format('DD/MM/YYYY');
  const hours = moment().format('HH:mm:ss');
  const fullDate = `${date} - ${hours}`
  return fullDate;
};

const generateObjectToSend = async (userName, taskContent, statusTask) => {
  const data = {
    userName,
    taskContent,
    date: await generateDate(),
    statusTask,
  };

  return data
}

export default generateObjectToSend
