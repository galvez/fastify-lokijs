
const isProd = process.env.NODE_ENV === 'production'
const filename = 'loki.db'

module.exports = {
  filename,
  verbose: !isProd,
  autosave: true,
  autoload: true,
  autosaveInterval: 1000,
  adapter: new LokiFSStructuredAdapter(),
  autosaveCallback: () => {},
}
