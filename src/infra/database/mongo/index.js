const mongoose = require('mongoose');
require('dotenv').config();

class Database {
  constructor() {
    mongoose.set('strictQuery', true);
    this.connect();

  }
  connect() {
    return mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  disconnect() {
    return mongoose.connection.close();
  }
}

module.exports = new Database().connect();
