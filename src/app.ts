import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config();

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const messageRoute = require('./routes/messages');
app.use('/messages', messageRoute);

app.get('/', (req, res) => {
    res.send('Home');
});

// Connect to DB
mongoose.connect( 
    String(process.env.DB_CONNECTION),
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Connected to DB!')}
);

app.listen(3500, () => {console.log('Server is running')})