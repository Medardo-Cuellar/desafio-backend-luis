const users = require("../models/users.model");
const createError = require('http-errors');
const encrypt = require('../lib/encrypt');

async function create(userData) {
    const userFound = await users.findOne({ email: userData.email });
    if (userFound) {
        throw createError(409,"El email ya esta registrado"); //validamos que no se duplique el usuario
    }
    const password = await encrypt.encrypt(userData.password); //le ponemos await porque encrypt regresa una promesa y tiene que ser sobre userData.password no sobre newUser.password porque estamos trabjanod con la entrada de informacion no con el retorno. 
    userData.password = password;//le asignamos el password encriptado 

    const newUser = await users.create(userData);

     return newUser;
}

async function getAll() {
    const allUsers = await users.find({});
    return allUsers;
}

async function deleteByID(id) {
    const deletedUser = await users.findByIdAndDelete(id);
    return deletedUser;
}

async function getByID(id) {
    const user = await users.findById(id);
    return user;
}

async function updateByID(id, newUserData) {
    const updatedUser = await users.findByIdAndUpdate(id, newUserData, {
        new: true,
    }); //la configuracion de new es para que nos regrese el user actualizado
    return updatedUser;
}

module.exports = {
    create,
    getAll,
    deleteByID,
    getByID,
    updateByID,
};
