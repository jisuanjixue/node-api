'use strict'

require('dotenv').config()

const dbDetails = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
}
}

module.exports = {
  development: dbDetails,
  production: dbDetails
}
