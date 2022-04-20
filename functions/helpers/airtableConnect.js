require('dotenv').config()
const Airtable = require('airtable')
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE)
const table = base(process.env.AIRTABLE_NAME)

module.exports = {table}