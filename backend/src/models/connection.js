const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/';
const DB_NAME = 'ebytr';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => mongodb
    .connect(MONGO_DB_URL, OPTIONS).then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    }
);

module.exports = connection;