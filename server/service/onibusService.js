const bussControllData = require('../data/onibus')

exports.getFrota = function () {
  return bussControllData.getFrota()
}

exports.getOnibusById = function () {
  return bussControllData.getOnibusById()
}

exports.saveOnibus = function (onibus) {
  return bussControllData.saveOnibus(onibus)
}

exports.deleteOnibus = function (id) {
  return bussControllData.deleteOnibus(id)
}

exports.atualizarOnibus = function (id, onibus) {
  return bussControllData.atualizarOnibus(id)
}
