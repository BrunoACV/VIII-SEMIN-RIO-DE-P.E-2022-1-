const axios = require('axios')
const crypto = require('crypto')
const req = require('../../node_modules/express/lib/request')
const motoristaService = require('../service/motoristaService')

const generate = function () {
  return crypto.randomBytes(20).toString('hex')
}

const request = function (url, method, data) {
  return axios({ url, method, data })
}

test('Deve pegar todos os motoristas', async function () {
  //Given - dado que
  const motorista1 = await motoristaService.saveMotorista({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate(),
    numeroCNH: generate()
  })
  const motorista2 = await motoristaService.saveMotorista({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate(),
    numeroCNH: generate()
  })
  const motorista3 = await motoristaService.saveMotorista({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate(),
    numeroCNH: generate()
  })

  //When - quando acontecer
  const response = await request('http://localhost:3000/motoristas', 'get')
  const motoristas = response.data
  //Then - então
  expect(motoristas).toHaveLength(3)

  await motoristaService.deleteMotorista(motorista1.id)
  await motoristaService.deleteMotorista(motorista2.id)
  await motoristaService.deleteMotorista(motorista3.id)
})

test('Deve salvar um Motorista', async function () {
  //Given - dado que
  const data = {
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate(),
    numeroCNH: generate()
  }
  //When - quando acontecer
  const response = await request(
    'http:/localhost:3001/motoristas',
    'post',
    data
  )
  const motorista = response.data
  //Then - então
  expect(motorista.nome).toBe(data.nome)
  expect(motorista.cpf).toBe(data.cpf)
  expect(motorista.dataNascimento).toBe(data.dataNascimento)
  expect(motorista.numeroCNH).toBe(data.numeroCNH)

  await motoristaService.deleteMotorista(motorista.id)
})

test('Deve atualizar um Motorista', async function () {
  //Given - dado que
  const motorista = await motoristaService.saveMotorista({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate(),
    numeroCNH: generate()
  })
  motorista.nome = generate()
  motorista.cpf = generate()
  motorista.dataNascimento = generate()
  motorista.numeroCNH = generate()

  //When - quando acontecer
  await request(
    `http:/localhost:3001/motorista/${motorista.id}`,
    'put',
    motorista
  )
  const motoristaAtualizado = await motoristaService.getMotoristaById(
    motorista.id
  )

  //Then - então
  expect(motoristaAtualizado.nome).toBe(motorista.nome)
  expect(motoristaAtualizado.cpf).toBe(motorista.cpf)
  expect(motoristaAtualizado.dataNascimento).toBe(motorista.dataNascimento)
  expect(motoristaAtualizado.numeroCNH).toBe(motorista.numeroCNH)

  await motoristaService.deleteMotorista(motorista.id)
})

test('Deve deletar um Motorista', async function () {
  //Given - dado que
  const motorista = await motoristaService.saveMotorista({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate(),
    numeroCNH: generate()
  })

  //When - quando acontecer
  await request(`http:/localhost:3001/motorista/${motorista.id}`, 'delete')

  //Then - então
  const motoristas = await motoristaService.getMotoristas()
  expect(motoristas).toHaveLength(0)
})
