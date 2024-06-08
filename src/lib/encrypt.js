// implementamos la función de encriptación en este archivo para que en caso de que la libreria cambie, solo tengamos que cambiarla en un solo lugar en lugar de en todos los archivos que la usan.

const bycrypt = require('bcrypt');

const SALT_ROUNDS = 10; // es para agregarle complejidad a la encriptacion

function encrypt(text) {
    return bycrypt.hash(text, SALT_ROUNDS); //regresa una promesa asi que cuando implementemos esta funcion encrypt tendra que ser en un await
}

function compare(plainText, hashText){
    return bycrypt.compare(plainText, hashText);

}

module.exports = {
    encrypt,
    compare
};