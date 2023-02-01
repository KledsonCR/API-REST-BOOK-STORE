const mongoose = require('mongoose');
const config = require('../../../config/config');

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    return mongoose.connect(
      `mongodb+srv://${config.database.username}:${config.database.password}@cluster0.bvnmvyk.mongodb.net/?retryWrites=true&w=majority`
    );
  }
  disconnect() {
    return mongoose.connection.close();
  }
}

module.exports = new Database().connect();
