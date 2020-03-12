const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connected successfully"))

const patientsRouter = require('./routes/patients');

app.use('/patients', patientsRouter);

app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
