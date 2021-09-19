// ROTAS
// GET - Buscar informação
// POST - Criar informação
// PUT - Editar informação
// DELETE - Deletando informação

// Query = url/users?search=diego&... - Informações opcionais - Reqs
// Route = url/users/parametros - Identificar
// o Path fica /users/:"nomeDoParametro" 
// Body = formularios  -Json

// Banco de dados - Driver nativo - Query builder - ORM
// texto igual a do banco de dados - igual + javascript - full java - da para mudar de banco suave

import express from 'express'
import './database/connection'
import 'express-async-errors'
import cors from 'cors' 
import path from 'path'

import errorHandler from './errors/handler' 
import routes from './routes'

//instanciamento do server
const app = express()

app.use(cors())
// metodo que faz o express entender json
app.use(express.json())
// metodo que faz o express achar as rotas - routes.ts
app.use(routes)
// metodo que guia as rotas com /uploads/ e deixa a pasta static
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
// error handler personalizado - ./errors/handler
app.use(errorHandler)

app.listen(3333)