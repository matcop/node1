'use strict'
const test = require('ava')
const config = {
  // vamos a utlizarlo contra una base de datos de prueba como sqlite
  logging: function () {}
}
let db = null
// antes de cada test se ejecutara la siguiente funcion asincrona
test.before(async () => {
  // esta funcion tendra o requerira el modulo de conexion a  BD
  const setupDatabase = require('../index')
  // tambien definiremos una variable global de bd y le pasamos config
  db = await setupDatabase(config)
})

test('El Agente existe...', t => {
  // significa q resuelve a verdadero o que exista un valor
  t.truthy(db.Agent, '')
})
