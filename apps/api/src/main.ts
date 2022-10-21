import * as express from 'express';
import { Message } from '@junction/api-interfaces';
import { Db } from 'mongodb';
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const greeting: Message = { message: 'Welcome to Zsombi app!' };

main().catch(err => console.error(err));

async function main() {
  const DB_USER: string = process.env.DB_USER;
  const DB_PASS: string = process.env.DB_PASS;

  console.log(DB_USER);

  await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@bytesgate.xdaa0yz.mongodb.net/?retryWrites=true&w=majority`);

  console.log("Connected to MongoDB");
}

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
