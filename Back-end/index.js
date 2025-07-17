require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./Router/router');

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Escuchando en localhost:${port}`);   
})
