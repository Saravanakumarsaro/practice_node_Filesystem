const mongoDb = require('mongoDb').MongoClient;
const todo = {};
let dbName;

todo.connection = () => {
  return new Promise((resolve) => {
    mongoDb.connect(`mongodb://localhost:27017`, (err, res) => {
      if (err) {
        resolve('DB not Connected');
      } else {
        dbName = res.db('userdetails');
        resolve('success');
      }
    });
  });
};

module.exports = todo;
