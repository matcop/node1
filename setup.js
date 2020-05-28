'use strict'
const debug = require('debug')('platziverse:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'Esto destruira tu base de datos, estas tu seguro ?'
    }
  ])
  if (!answer.setup) {
    return console.log('no pasa nada... !')
  }
  const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.BD_USER || 'platziuser',
    password: process.env.DB_PASS || 'platzi',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    port: 5433,
    setup: true
  }

  /* const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.BD_USER || 'platziuser',
    password: process.env.DB_PASS || 'platzi',
    host: process.env.DB_HOST || 'http://127.0.0.1:51390',
    dialect: 'postgres',
    logging: s => debug(s),
    //port: 5433,
    setup: true

  } */

  await db(config).catch(handleFatalError)
  // para la prueba
  console.log('satisfactorio2')

  console.log('satisfactorio')
  process.exit(0)
}

function handleFatalError (err) {
  console.log(`${chalk.red('[ERROR GRAVE----> ]')} ${err.message}`)
  console.log(err.stack)
  process.exit(1)
}
setup()
