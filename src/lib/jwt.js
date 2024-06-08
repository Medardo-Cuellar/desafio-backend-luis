//si queremos cambiar de libreria podemos solo cambiar la implementacion en el archivo
const jswonwebtoken = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function sign(payload)
{
    return jswonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1d' }); //
}

function verify(token)
{
    return jswonwebtoken.verify(token, JWT_SECRET);
}

module.exports = {
    sign,
    verify
};