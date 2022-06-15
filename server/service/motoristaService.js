const motoristaData = require('../data/motorista')

exports.getMotoristas = function () {
  return motoristaData.getMotoristas()
}

exports.getMotoristaById = function (id) {
  return motoristaData.getMotoristaById(id)
}

exports.saveMotorista = function (motorista) {
  return motoristaData.saveMotorista(motorista)
}

exports.deleteMotorista = function (id) {
  return motoristaData.deleteMotorista(id)
}

exports.atualizarMotorista = function (id, motorista) {
  return motoristaData.atualizarMotorista(id, motorista)
}
