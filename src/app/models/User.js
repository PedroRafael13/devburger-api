import Sequelize, { Model } from "sequelize"
import bcrypt from "bcrypt"

class User extends Model {
  static init(sequelize){
    super.init({
      name : Sequelize.STRING,
      email : Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash : Sequelize.STRING,
      admin: Sequelize.BOOLEAN,
    }, {
      sequelize
    }
    )

    this.addHook('beforeSave', (user) => { 
      if(user.password_hash){
        user.password_hash = bcrypt.hash(user.password_hash, 10)
      }
    })

    return this
  }

  checkPassword(password){
   return bcrypt.compare(password, password_hash)
  }
}

export default User