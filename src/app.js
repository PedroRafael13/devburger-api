const express = require('express')

class App{
  constructor() {
    this.app = express()
    this.middleware()
    this.routes()
  }

  middleware(){
    this.app.use(express.json())
  }

  routes(){}
}

module.exports = new App().app