const { ObjectId } = require('mongodb');
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


const validateTaskEntries =  async ({ userName, taskContent, status, date }) => {
  const isValid = SCHEMA.validate({ userName, taskContent, date, status });
  if (isValid.error) {
    return {
      status: 400,
      message: isValid.error.message
    }
  }

}

const idConvertedAndValid = (id) => {
  if (id && ObjectId.isValid(id)) {
    return ObjectId(id)
  }
};

module.exports = {
  validateTaskEntries,
  idConvertedAndValid,
};
