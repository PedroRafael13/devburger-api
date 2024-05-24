import * as Yup from "yup"
import User from "../models/User"
import Jwt  from "jsonwebtoken"
import authConfig from "../../config/auth"
class SessionController{
  async store (request, response){
    const schema = Yup.object({
      email : Yup.string().email().required(),
      password : Yup.string().min(6).required(),
    })

    const isValided = await schema.isValid(request.body)

    const emailOrPasswordInCorrect = () => {
      return response.status(401).JSON({erro: "make sure your email or password are correct"})
    }

    if(!isValided){
     return emailOrPasswordInCorrect()
    }

    const { email, password } = request.body

    const user =  await User.findOne({
      where : {
        email,
      },
    })

    if(!user){
      return emailOrPasswordInCorrect()   
     }
    
    const isSamePassword = await user.checkPassword(password)

    if(!isSamePassword){
     return  emailOrPasswordInCorrect()
    }

    return response.JSON({id: user.id, 
      name: user.name, 
      email, 
      admin : user.admin, 
      token : Jwt.sign({id : user.id}, authConfig.secreat, {
        expiresIn : authConfig.expiresIn
      }),
    })
  }
}

export default new SessionController()
