const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const onibusService = require('../service/onibusService')

// RELACIONADO AOS ONIBUS
router.get('/frota', async function (req, response) {
  const frota = await onibusService.getFrota()
  res.json(frota)
})

router.get('/frota/:id', async function (req, response) {
  const onibus = await onibusService.getOnibusById(req.params.id)
  res.json(onibus)
})

router.post('/frota', async function (req, response) {
  const onibus = req.body
  const newOnibus = await onibusService.saveOnibus(onibus)
  res.json(newOnibus)
})

router.put('/frota/:id', async function (req, response) {
  const onibus = req.body
  await onibusService.atualizarOnibus(req.params.id, onibus)
  res.end()
})

router.delete('/frota/:id', async function (req, response) {
  await onibusService.deleteOnibus(req.params.id)
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
