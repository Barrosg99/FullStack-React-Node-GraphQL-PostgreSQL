require('dotenv').config();
const express = require('express');
const cors = require('cors');

const postgraphile = require('./postgraphile');

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(postgraphile);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));