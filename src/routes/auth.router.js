const jwt = require("../lib/jwt");
const Users = require("../models/users.model"); //los modelos se importan con mayuscula
const createError = require('http-errors');
const encrypt = require('../lib/encrypt');

async function login (email, password) {
  const user = await Users.findOne({email}); // el findOne lleva un objeto con la propiedad que queremos buscar
  if(!user) throw new createError(401,"Datos invalidos");
  const isPasswordValid = await encrypt.compare(password, user.password);
  if(!isPasswordValid) throw new createError(401,"Datos invalidos");
  const token = jwt.sign({id: user._id}); // el guionbajo va en el id porque es el nombre que mongoose le da al id
  return token;
}
module.exports = {
  login
}