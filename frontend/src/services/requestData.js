const generateDate = () => {
  const date=new Date();
  const dia=date.getDate();
  const mes=date.getMonth()+1;
  const ano=date.getFullYear();
  const h=date.getHours();
  const m=date.getMinutes();
  const s=date.getSeconds();

  const fullDate = (`${dia}/${mes}/${ano} - ${h}:${m}:${s}`);
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
