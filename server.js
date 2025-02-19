const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.get('/', (req, res) => {
  res.json('Hello mates! welcome to my voting application... to access this please go through the code so that you can get idea about the routes and methods. This is just a backend project so to access the routes you have to use postman or similar API testing application.');
});

app.listen(PORT, () => {
  console.log("listening on port 3000")
});
