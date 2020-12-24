'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.atualizaCliente = function atualizaCliente (req, res, next) {
  var criacontatovtexapp2 = req.swagger.params['criacontatovtexapp2'].value;
  Default.atualizaCliente(criacontatovtexapp2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.criaCliente = function criaCliente (req, res, next) {
  var criacontatovtexapp2 = req.swagger.params['criacontatovtexapp2'].value;
  Default.criaCliente(criacontatovtexapp2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
