const database = require('../infra/database')

exports.getFrota = function () {
  return database.query('select * from busscontroll.frota')
}

exports.getOnibusById = function (id) {
  return database.oneOrNone('select * from busscontroll.frota where id = $1', [
    id
  ])
}

exports.saveOnibus = function (onibus) {
  return database.one(
    'insert into busscontroll.frota (trajeto, tempoTrajeto) values ($1, $2) returning *',
    [onibus.trajeto, onibus.tempoTrajeto]
  )
}

exports.deleteOnibus = function (id) {
  return database.none('delete from busscontroll.frota where id = $1', [id])
}

exports.atualizarOnibus = function (id, onibus) {
  return database.none(
    'update busscontroll.frota set trajeto = $1, tempoTrajeto = $2 where id = $3',
    [onibus.trajeto, onibus.tempoTrajeto, id]
  )
}
