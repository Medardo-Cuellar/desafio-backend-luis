require('dotenv').config();

const db = require('./src/lib/db');
const server = require('./src/server');

PORT = process.env.PORT || 8080; // el puerto que se va a usar es el que esta en el archivo .env o el 8080 si no esta definido

db.connect().then(() => {
    console.log("DB connected");
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => { console.error("DB connection error", error) });