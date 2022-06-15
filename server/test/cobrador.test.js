const axios = require('axios')
const crypto = require('crypto')
const req = require('../../node_modules/express/lib/request')
const cobradorService = require('../service/cobradorService')

const generate = function () {
  return crypto.randomBytes(20).toString('hex')
}

const request = function (url, method, data) {
  return axios({ url, method, data })
}

test('Deve pegar todos os cobradores', async function () {
  //Given - dado que
  const cobrador1 = await cobradorService.saveCobrador({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate()
  })
  const cobrador2 = await cobradorService.saveCobrador({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate()
  })
  const cobrador3 = await cobradorService.saveCobrador({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate()
  })

  //When - quando acontecer
  const response = await request('http://localhost:3000/cobradores', 'get')
  const cobradores = response.data
  //Then - então
  expect(cobradores).toHaveLength(3)

  await cobradorService.deleteCobrador(cobrador1.id)
  await cobradorService.deleteCobrador(cobrador2.id)
  await cobradorService.deleteCobrador(cobrador3.id)
})

test('Deve salvar um cobrador', async function () {
  //Given - dado que
  const data = {
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate()
  }
  //When - quando acontecer
  const response = await request(
    'http:/localhost:3001/cobradores',
    'post',
    data
  )
  const cobrador = response.data
  //Then - então
  expect(cobrador.nome).toBe(data.nome)
  expect(cobrador.cpf).toBe(data.cpf)
  expect(cobrador.dataNascimento).toBe(data.dataNascimento)

  await cobradorService.deleteCobrador(cobrador.id)
})

test('Deve atualizar um cobrador', async function () {
  //Given - dado que
  const cobrador = await cobradorService.saveCobrador({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate()
  })
  cobrador.nome = generate()
  cobrador.cpf = generate()
  cobrador.dataNascimento = generate()

  //When - quando acontecer
  await request(`http:/localhost:3001/cobrador/${cobrador.id}`, 'put', cobrador)
  const cobradorAtualizado = await cobradorService.getCobradorById(cobrador.id)

  //Then - então
  expect(cobradorAtualizado.nome).toBe(cobrador.nome)
  expect(cobradorAtualizado.cpf).toBe(cobrador.cpf)
  expect(cobradorAtualizado.dataNascimento).toBe(cobrador.dataNascimento)

  await cobradorService.deleteCobrador(cobrador.id)
})

test('Deve deletar um cobrador', async function () {
  //Given - dado que
  const cobrador = await cobradorService.saveCobrador({
    nome: generate(),
    cpf: generate(),
    dataNascimento: generate()
  })

  //When - quando acontecer
  await request(`http:/localhost:3001/cobrador/${cobrador.id}`, 'delete')

  //Then - então
  const cobradores = await cobradorService.getCobradores()
  expect(cobradores).toHaveLength(0)
})
