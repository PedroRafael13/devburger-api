import Sequelize from "sequelize"
import User from "../app/models/User"

import configDataBase from "../config/database"

const models = [User]

class dataBase {
  constructor(){
    this.init()
  }

  init(){
    this.connection = new Sequelize(configDataBase)
    models.map((model) => model.init(this.connection))
  }
}

export default dataBase
