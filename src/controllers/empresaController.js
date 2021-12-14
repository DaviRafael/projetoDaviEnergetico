const mongoose = require('mongoose')
const Empresa = require('../models/empresa')
const jwt = require('jsonwebtoken')
const energetico = require('../models/energetico')
const SECRET = process.env.SECRET


const getAll = async (req, res) => {
  const authHeader = req.get('authorization');
  const token = authHeader.split(' ')[1]
  // console.log(token)

  if (!token) {
    return res.status(403).send({message: "Token não encontrado"})
  }
  // usar método do jwt para autenticar a rota
    // verificação do token com o SECRET do projeto
  jwt.verify(token, SECRET, async (err) => {
    if (err) {
      res.status(403).send({ message: 'Token não válido', err})
    }

    const empresa = await empresa.find()
    res.json(Empresa)
  })
}

const createEmpresa = async (req, res) => {
  const empresa = new Empresa({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    criadoEm: req.body.criadoEm,
  })
  const empresaJaExiste = await Empresa.findOne({nome: req.body.nome})
  if (empresaJaExiste) {
    return res.status(409).json({error: 'Empresa ja cadastrada.'})
  }
  try{
    const novaEmpresa = await empresa.save()
    res.status(201).json(novaEmpresa)
  } catch(err) {
    res.status(400).json({ message: err.message})
  }
}

const updateOneEmpresa = async (req, res) => {
  const id = req.body._id
  const nome = req.body.nome

  Empresa.updateOne({ _id: id}, {
    $set: {
      nome:nome
    }
  }, (err, result) => {
    if(err) return res.send(err)
    res.status(200).json({ message: 'Empresa atualizada com sucesso'})
  })
}

const ProcurarId = async (req, res) => {
  const id = req.params.id
  Empresa.findById(id)
  .then((empresa) => {
    res.status(200).json(empresa);
  })
  .catch(err => next(err));
}

const deleteOneEmpresa = async (req, res) => {

const id = req.body._id  
Empresa.deleteOne({ _id: id }, {

}, (err, results) => {
  if(err) return res.send(err)
  res.status(200).json({ message: "Empresa excluida com sucesso"})
})
}
module.exports = {
  getAll,
  createEmpresa,
  updateOneEmpresa,
  deleteOneEmpresa,
  ProcurarId
}