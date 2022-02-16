const BaseJoi = require('joi');
const JoiDate = require('@hapi/joi-date');
const Joi = BaseJoi.extend(JoiDate);

const dateFormat = `DD/MM/YYYY-HH:mm:ss`;

const SCHEMA = Joi.object ({
  userName: Joi.string().required(),
  taskContent: Joi.string().required(),
  date: Joi.date().format(dateFormat).required().error( new Error('Invalid Date')),
  status: Joi.string().required(),
});


const validateTaskEntries =  async ({ userName, taskContent, date, status }) => {
  console.log(date);
  const isValid = SCHEMA.validate({ userName, taskContent, date, status });
  if (isValid.error) {
    return {
      status: 400,
      message: isValid.error.message
    }
  }

}


module.exports = {
  validateTaskEntries,
};
