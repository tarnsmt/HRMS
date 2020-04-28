var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  jwtToken: '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiZW1wbG95ZWVfaWQiOiIwMDAwMDAwMCIsInJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXSwiaWF0IjoxNTg3ODc5NTEyLCJleHAiOjE1ODg0ODQzMTJ9.qc7rW5Q8kHimVsEhlFet5CbNkjL1vYxBFONPMxBb3i8"'
})
