const axios = require('axios')
const { API_URL } = process.env

module.exports = axios.create({
  baseURL: API_URL
})
