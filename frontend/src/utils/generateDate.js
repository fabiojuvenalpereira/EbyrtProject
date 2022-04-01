import moment from 'moment';

const generateDate = () => {
  const date = moment().format('DD/MM/YYYY');
  const hours = moment().format('HH:mm:ss');
  const fullDate = `${date} - ${hours}`;
  return fullDate;
};

export default generateDate;
