const createError = require('http-errors');
const jwt = require('../lib/jwt');
const usersUseCase = require('../usecases/users.usecase');

async function auth(request,response,next){
    try{
        const authorizationToken = request.headers.authorization; // el valor de aqui es un token
        if(!authorizationToken) throw createError(401,"Authorization required"); // aqui se verifica que el token no sea falso
        const payload = jwt.verify(authorizationToken);
        const user = await usersUseCase.getByID(payload.id);
        request.user = user; // con esto estamos buscando el usuario y permitimos a los demas endpoints que accedan a la informacion de la base de datos
        next();
    }
    catch(error){
        response.status(401);
        response.json({
            success: false,
            error: error.message,
        });
    }
    
}

module.exports = auth;