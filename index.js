const express = require('express');
const database = require('./database');
const fileOpertations = require('./fileSystem');
const app = express();
const port = 2209;

app.use(express.json());

const initial = async () => {
  const temp = await database.connection();
  if (temp == 'success') {
    app.listen(port, () => {
      console.log(`This Application is listens to http://localhost:${port}`);
    });
  } else {
    console.log(temp);
  }
};

app.post('/write', async (req, res) => {
  let temp = await fileOpertations.createFile(req.body);
  res.send(temp);
});

app.post('/append', async (req, res) => {
  let temp = await fileOpertations.appendFile(req.body);
  res.send(temp);
});

app.post('/read', async (req, res) => {
  let temp = await fileOpertations.readFile(req.body);
  res.send(temp);
});

app.post('/delete', async (req, res) => {
  let temp = await fileOpertations.deleteFile(req.body);
  res.send(temp);
});

initial();
