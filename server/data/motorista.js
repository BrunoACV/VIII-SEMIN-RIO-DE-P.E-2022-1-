const database = require('../infra/database')

exports.getMotoristas = function () {
  return database.query('select * from busscontroll.motorista')
}

exports.getMotoristaById = function (id) {
  return database.oneOrNone(
    'select * from busscontroll.motorista where id = $1',
    [id]
  )
}

exports.saveMotorista = function (motorista) {
  return database.one(
    'insert into busscontroll.motorista (nome, cpf, dataNascimento, numeroCNH) values ($1, $2, $3, $4) returning *',
    [
      motorista.nome,
      motorista.cpf,
      motorista.dataNascimento,
      motorista.numeroCNH
    ]
  )
}

exports.deleteMotorista = function (id) {
  return database.none('delete from busscontroll.motorista where id = $1', [id])
}

exports.atualizarMotorista = function (id, motorista) {
  return database.none(
    'update busscontroll.motorista set nome = $1,cpf = $2,dataNascimento = $3,numeroCNH = $4 ,where id = $5',
    [
      motorista.nome,
      motorista.cpf,
      motorista.dataNascimento,
      motorista.numeroCNH,
      id
    ]
  )
}
