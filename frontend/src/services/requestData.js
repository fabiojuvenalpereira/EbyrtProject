const generateDate = () => {
  const date=new Date();
  const dia=date.getDate();
  const mes=date.getMonth()+1;
  const ano=date.getFullYear();
  const h=date.getUTCHours()-3;
  const m=date.getMinutes();
  const s=date.getSeconds();

  const fullDate = (`${dia}/${mes}/${ano} - ${h}:${m}:${s}`)
  return fullDate;
};

const generateObjectToSend = (userName, taskContent, status) => {
  const data = {
    userName,
    taskContent,
    date: generateDate(),
    status,
  };

  return data
}

export default generateObjectToSend
