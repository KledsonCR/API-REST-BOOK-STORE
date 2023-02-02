const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

class Database {
  constructor() {
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
