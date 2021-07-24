'use strict'

const { resolve } = require('path')
const { assign } = Object

const fp = require('fastify-plugin')
const Loki = require('lokijs')

const defaults = require('./defaults.js')

async function lokiPLugin (fastify, options = {}) {
  const db = new Loki(
    resolve(__dirname, options.filename),
    assign({}, defaults, options),
  )

  fastify.decorate('loki', {
    db,
    collection (name) {
      const col = db.getCollection(name)
      if (col == null) {
        return db.addCollection(name, { unique: ['_id'] })
      }
      return col
    },
  })
  fastify.addHook('onClose', (fastify, done) => {
    fastify.loki.db.close()
    done()
  })
}

module.exports = fp(lokiPLugin)
