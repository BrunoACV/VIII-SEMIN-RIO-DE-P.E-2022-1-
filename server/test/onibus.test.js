const axios = require('axios')
const crypto = require('crypto')
const req = require('../../node_modules/express/lib/request')
const onibusService = require('../service/onibusService')

const generate = function () {
  return crypto.randomBytes(20).toString('hex')
}

const request = function (url, method, data) {
  return axios({ url, method, data })
}

test('Deve pegar a frota de onibus', async function () {
  //Given - dado que
  const onibus1 = await onibusService.saveOnibus({
    trajeto: generate(),
    tempoTrajeto: generate()
  })
  const onibus2 = await onibusService.saveOnibus({
    trajeto: generate(),
    tempoTrajeto: generate()
  })
  const onibus3 = await onibusService.saveOnibus({
    trajeto: generate(),
    tempoTrajeto: generate()
  })

  //When - quando acontecer
  const response = await request('http://localhost:3000/frota', 'get')
  const frota = response.data
  //Then - então
  expect(frota).toHaveLength(3)

  await onibusService.deleteOnibus(onibus1.id)
  await onibusService.deleteOnibus(onibus2.id)
  await onibusService.deleteOnibus(onibus3.id)
})

test('Deve salvar um Onibus', async function () {
  //Given - dado que
  const data = {
    trajeto: generate(),
    tempoTrajeto: generate()
  }
  //When - quando acontecer
  const response = await request('http:/localhost:3001/frota', 'post', data)
  const onibus = response.data
  //Then - então
  expect(onibus.trajeto).toBe(data.trajeto)
  expect(onibus.tempoTrajeto).toBe(data.tempoTrajeto)
  await onibusService.deleteOnibus(onibus.id)
})

test('Deve atualizar um Onibus', async function () {
  //Given - dado que
  const onibus = await onibusService.saveOnibus({
    trajeto: generate(),
    tempoTrajeto: generate()
  })
  onibus.trajeto = generate()
  onibus.tempoTrajeto = generate()

  //When - quando acontecer
  await request(`http:/localhost:3001/frota/${onibus.id}`, 'put', onibus)
  const onibusAtualizado = await onibusService.getOnibusById(onibus.id)

  //Then - então
  expect(onibusAtualizado.trajeto).toBe(onibus.trajeto)
  expect(onibusAtualizado.tempoTrajeto).toBe(onibus.tempoTrajeto)
  await onibusService.deleteOnibus(onibus.id)
})

test('Deve deletar um Onibus', async function () {
  //Given - dado que
  const onibus = await onibusService.saveOnibus({
    trajeto: generate(),
    tempoTrajeto: generate()
  })

  //When - quando acontecer
  await request(`http:/localhost:3001/frota/${onibus.id}`, 'delete')

  //Then - então
  const frota = await onibusService.getFrota()
  expect(frota).toHaveLength(0)
})
