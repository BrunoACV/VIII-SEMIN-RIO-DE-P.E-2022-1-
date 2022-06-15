const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const motoristaService = require('../service/motoristaService')

// RELACIONADO AOS ONIBUS
router.get('/motoristas', async function (req, response) {
  const motoristas = await motoristaService.getMotoristas()
  res.json(motoristas)
})

router.get('/motorista/:id', async function (req, response) {
  const motorista = await motoristaService.getMotoristaById(req.params.id)
  res.json(motorista)
})

router.post('/motoristas', async function (req, response) {
  const motorista = req.body
  const newMotorista = await motoristaService.saveMotorista(motorista)
  res.json(newMotorista)
})

router.put('/motorista/:id', async function (req, response) {
  const motorista = req.body
  await motoristaService.atualizarMotorista(req.params.id, motorista)
  res.end()
})

router.delete('/motorista/:id', async function (req, response) {
  await motoristaService.deleteMotorista(req.params.id)
  res.end()
})

module.exports = router
