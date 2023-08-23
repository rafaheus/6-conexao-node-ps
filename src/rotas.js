const express = require('express');
const controladores = require('./controladores/controladores');

const rotas = express();

// rotas.get('/', controladores.controlador1);
// rotas.get('/:id', controladores.controlador2);
rotas.get('/', controladores.controlador3);



module.exports = rotas;