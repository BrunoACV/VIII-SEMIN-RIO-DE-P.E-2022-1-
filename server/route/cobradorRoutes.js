const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const cobradorService = require('../service/cobradorService')

// RELACIONADO AOS ONIBUS
router.get('/cobradores', async function (req, response) {
  const cobradores = await cobradorService.getCobradores()
  res.json(cobradores)
})

router.get('/cobrador/:id', async function (req, response) {
  const cobrador = await cobradorService.getCobradorById(req.params.id)
  res.json(cobrador)
})

router.post('/cobradores', async function (req, response) {
  const cobrador = req.body
  const newCobrador = await cobradorService.saveCobrador(cobrador)
  res.json(newCobrador)
})

router.put('/cobrador/:id', async function (req, response) {
  const cobrador = req.body
  await cobradorService.atualizarCobrador(req.params.id, cobrador)
  res.end()
})

router.delete('/cobrador/:id', async function (req, response) {
  await cobradorService.deleteCobrador(req.params.id)
  res.end()
})

module.exports = router
