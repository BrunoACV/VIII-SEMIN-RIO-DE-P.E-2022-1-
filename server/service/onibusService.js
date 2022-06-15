const onibusData = require('../data/onibus')

exports.getFrota = function () {
  return onibusData.getFrota()
}

exports.getOnibusById = function (id) {
  return onibusData.getOnibusById(id)
}

exports.saveOnibus = function (onibus) {
  return onibusData.saveOnibus(onibus)
}

exports.deleteOnibus = function (id) {
  return onibusData.deleteOnibus(id)
}

exports.atualizarOnibus = function (id, onibus) {
  return onibusData.atualizarOnibus(id, onibus)
}
