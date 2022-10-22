import * as express from 'express';
import { Message } from '@junction/api-interfaces';
import GroupRoutes from './app/routes/group';
import TripRoutes from './app/routes/trips';
import UserRoutes from './app/routes/user';
import * as cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();

const greeting: Message = { message: 'Welcome to Zsombi app!' };

main().catch((err) => console.error(err));

async function main() {
  const DB_USER: string = process.env.DB_USER;
  const DB_PASS: string = process.env.DB_PASS;

  console.log(DB_USER);

  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@demo.kbudhed.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log('Connected to MongoDB');
}
app.use(cors());
app.use(express.json());
app.use('/api', GroupRoutes);
app.use('/api', TripRoutes);
app.use('/api', UserRoutes);
app.get('/api', (req, res) => {
  res.send(greeting);
});

app.use(express.json());

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
