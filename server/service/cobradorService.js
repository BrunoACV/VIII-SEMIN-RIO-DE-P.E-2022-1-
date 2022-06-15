const cobradorData = require('../data/cobrador')

exports.getCobradores = function () {
  return cobradorData.getCobradores()
}

exports.getCobradorById = function (id) {
  return cobradorData.getCobradorById(id)
}

exports.saveCobrador = function (cobrador) {
  return cobradorData.saveCobrador(cobrador)
}

exports.deleteCobrador = function (id) {
  return cobradorData.deleteCobrador(id)
}

exports.atualizarCobrador = function (id, cobrador) {
  return cobradorData.atualizarCobrador(id, cobrador)
}
