"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
const configuration = require("../../knexfile");
const env = process.env.NODE_ENV;
const config = (env === 'production') ? configuration.production : configuration.development;
console.log(config);
const db = knex(config);
exports.default = db;
