// el use strict evita q se cometa errores que el this no obtenga infor del global
'use strict'
const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')
const defaults = require('defaults')

module.exports = async function (config) {
  // todo lo que venga del objeto de configuracion (config) la tomaremos
  // pero si no estan definidas tome las siguientes
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
      // si en 10 segundos, no existiese transaccion la sacara del
      // pool de conexiones, y la nesecita nuevamente la devolvera
    },
    query: {
      raw: true // que cada consulta nos entregue json sencillos o basicos
    }

  })

  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)
  //  lo siguiente define las relaciones entre agente y Metricas.
  //  sequelize creara auto id and foringkeys betwin the tables.
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)
  //  la linea de abajo esperara el tiempo prudente a la conecion
  //  si no conecta la func async mostrara los errores y
  //  el que la llame tendra que realizar el control de errores
  await sequelize.authenticate()
  if (config.setup) {
    await sequelize.sync({ force: true })
  }
  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
