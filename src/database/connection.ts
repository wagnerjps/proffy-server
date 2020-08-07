const knex = require("knex");
const configuration = require("../../knexfile");

const env = process.env.NODE_ENV;

const config = (env === 'production') ? configuration.production : configuration.development;
console.log(config)

const db = knex(config);

export default db;

