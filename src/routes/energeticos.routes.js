const express = require('express')
const router = express.Router()
const controller = require('../controllers/energeticoController')

//listar todos os titulos/get/find
router.get('/', controller.getAll)

//criar um novo titulo/post/save
router.post('/', controller.createEnergetico)

//listar um titulo/get/findById
router.get('/:id', controller.ProcurarId)

//atualizar uma informacao especifica num titulo/patch/findById/save
router.put('/update', controller.updateOneEnergetico)

//deletar um titulo/delete/findById/remove
router.delete('/delete', controller.deleteOneEnergetico)

module.exports = router