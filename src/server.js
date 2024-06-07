const express = require('express');

const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json()); //primero va este porque el orden de los middlewares es importante para que se ejecuten en el orden correcto


app.get('/', (request, response) => {
    response.json({ message: 'devToClone API' });
});

module.exports = app;