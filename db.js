const mysql = require('mysql2')
const pool = mysql.createPool({
  host: '192.168.49.1',
  user: 'root',
  password: 'root',
  database: 'classwork',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

module.exports = pool