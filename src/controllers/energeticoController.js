const mongoose = require('mongoose')
const Energetico = require('../models/energetico')

const getAll = async (req, res) => {
  const energetico = await Energetico.find().populate('empresa')
  res.status(200).json(energetico)
}

const createEnergetico = async (req, res) => {
  const energetico = new Energetico({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    descricao: req.body.descricao,
    empresa: req.body.empresa,
    validade: req.body.validade
  })
  //TODO : criar validação se filme já existe
  try {
    const novoEnergetico = await energetico.save()
    res.status(201).json(novoEnergetico)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}
const updateOneEnergetico = async (req, res) => {
  const id = req.body._id
  const nome = req.body.nome
  Energetico.updateOne({ _id: id }, {
    $set: {
      nome: nome
    }
  }, (err, result) => {
    if(err) return res.send(err)
    res.status(200).json({ message: 'Energetico atualizado com sucesso'})
  })  
}
const deleteOneEnergetico = async (req, res) => {
  const id = req.body._id
 
  Energetico.deleteOne({ _id: id }, {

  }, (err, result) => {
    if(err) return res.send(err)
    res.status(200).json({ message: 'Energetico deletado com sucesso'})
  })  
}
const ProcurarId = async (req, res) => {
  const id = req.params.id
  Energetico.findById(id)
    .then((Energetico) => {
      res.status(200).json(Energetico);
    })
    .catch(err => next(err));
  }

module.exports = {
  getAll,
  createEnergetico,
  updateOneEnergetico,
  deleteOneEnergetico,
  ProcurarId
}