require('dotenv').config()

module.exports = {
  "local": {
    "username": process.env.DB_LOCAL_USER,
    "password": process.env.DB_LOCAL_PASS,
    "database": process.env.DB_LOCAL_NAME,
    "host": process.env.DB_LOCAL_HOST,
    "dialect": process.env.DB_LOCAL_DIALECT
  },
  "development": {
    "username": process.env.DB_DEV_USER,
    "password": process.env.DB_DEV_PASS,
    "database": process.env.DB_DEV_NAME,
    "host": process.env.DB_DEV_HOST,
    "dialect": process.env.DB_DEV_DIALECT,
    "dialectOptions": {
      "options": {
        "encrypt": true
      }
    },
    "logging": false
  },
  "production": {
    "username": process.env.DB_PROD_USER,
    "password": process.env.DB_PROD_PASS,
    "database": process.env.DB_PROD_NAME,
    "host": process.env.DB_PROD_HOST,
    "dialect": process.env.DB_PROD_DIALECT,
    "dialectOptions": {
      "options": {
        "encrypt": true
      }
    },
    "logging": false
  }
}
