import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://mbern:js123@cluster0.c5gjs.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

//MongoDB
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running port: ${PORT}`))
  )
  .catch((error) => console.log(error.messag e));

// mongoose.set('useFindAndModify',false)
