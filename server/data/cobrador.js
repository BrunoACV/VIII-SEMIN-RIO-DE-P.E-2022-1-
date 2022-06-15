const database = require('../infra/database')

exports.getCobradores = function () {
  return database.query('select * from busscontroll.cobrador')
}

exports.getCobradorById = function (id) {
  return database.oneOrNone(
    'select * from busscontroll.cobrador where id = $1',
    [id]
  )
}

exports.saveCobrador = function (cobrador) {
  return database.one(
    'insert into busscontroll.cobrador (nome, cpf, dataNascimento, numeroCNH) values ($1, $2, $3) returning *',
    [
      cobrador.nome,
      cobrador.cpf,
      cobrador.dataNascimento
    ]
  )
}

exports.deleteCobrador = function (id) {
  return database.none('delete from busscontroll.cobrador where id = $1', [id])
}

exports.atualizarCobrador = function (id, cobrador) {
  return database.none(
    'update busscontroll.cobrador set nome = $1, cpf = $2, dataNascimento = $3 ,where id = $4',
    [
      cobrador.nome,
      cobrador.cpf,
      cobrador.dataNascimento,
      id
    ]
  )
}
