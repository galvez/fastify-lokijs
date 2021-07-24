# fastify-lokijs

Basic Fastify plugin for
[LokiJS](https://techfort.github.io/LokiJS/).

Adapted with minimal generalizations from
[Tomas Della Vedova's demodb](https://github.com/delvedor/demodb/blob/master/server/plugins/loki.js).

## Usage

```
const FastifyLokiJS = require('fastify-lokijs')
fastify.register(FastifyLokiJS, options)
```

Where `options` is passed as-is to the `Loki` constructor. 

Makes `fastify.loki.db` and `fastify.loki.collection()` available.

The `fastify.loki.collection()` helper gets a reference to a collection, creating it if needed.

See [`defaults.js`](https://github.com/terixjs/fastify-lokijs/blob/main/defaults.js) for the default options in place.

## License

MIT
