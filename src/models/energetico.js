const mongoose = require('mongoose')

const energeticosSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'empresa'
  },
  validade: {
    type: Date,
    required: true,
  }
})

module.exports = mongoose.model('energetico', energeticosSchema)