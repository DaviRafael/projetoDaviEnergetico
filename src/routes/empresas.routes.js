const express = require('express')
const router = express.Router()
const controller = require('../controllers/empresaController')

//listar todos os estudios/get/find
router.get('/', controller.getAll)

//criar um novo estudio/post/save
router.post('/', controller.createEmpresa)

//listar um estudio/get/findById
router.get('/:id', controller.ProcurarId)

//atualizar uma informacao especifica num estudio/patch/findById/save
router.put('/atualizar', controller.updateOneEmpresa)

//deletar um estudio/delete/findById/remove
router.delete('/delete', controller.deleteOneEmpresa)

module.exports = router