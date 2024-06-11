const express = require('express');

const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json()); 
app.use('/users', require('./routes/users.router'));
app.use('/posts', require('./routes/posts.router'));

app.get('/', (request, response) => {
    response.json({ message: 'devToClone API' });
});

module.exports = app;