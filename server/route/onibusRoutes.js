const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const bussControllService = require('../service/onibusService')

// RELACIONADO AOS ONIBUS
router.get('/frota', async function (req, response) {
  const frota = await bussControllService.getFrota()
  res.json(frota)
})

router.get('/frota/:id', async function (req, response) {
  const onibus = await bussControllService.getOnibusById()
  res.json(onibus)
})

router.post('/frota', async function (req, response) {
  const onibus = req.body
  const newOnibus = await bussControllService.saveOnibus(onibus)
  res.json(newOnibus)
})

router.put('/frota/:id', async function (req, response) {
  const onibus = req.body
  await bussControllService.atualizarOnibus(req.params.id, onibus)
  res.end()
})

router.delete('/frota/:id', async function (req, response) {
  await bussControllService.deleteOnibus(req.params.id)
  res.end()
})

// RELACIONADO AOS MOTORISTAS
router.get('/motoristas', async function (req, response) {})
router.get('/motoristas/:id')
router.post('/motorista')
router.put('/motorista/:id')
router.delete('/motorista/:id')

// RELACIONADO AOS COBRADORES
router.get('/cobradores', async function (req, response) {})
router.get('/cobradores/:id')
router.post('/cobrador')
router.put('/cobrador/:id')
router.delete('/cobrador/:id')

module.exports = router
