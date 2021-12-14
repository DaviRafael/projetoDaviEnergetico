const express = require('express')
const app = express()

require('dotenv-safe').config({silent: true})

//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(express.json())

const empresasRouter = require('./src/routes/empresas.routes')
app.use('/empresas', empresasRouter)

const energeticosRouter = require('./src/routes/energeticos.routes')
app.use('/energeticos', energeticosRouter)

const usuariasRouter = require('./src/routes/usuarias.routes')
app.use('/usuarios', usuariasRouter)

const index = require("./src/routes/index");
app.use('/', index)

app.listen(process.env.PORT, () => console.log('listening on port 3333'))