import { Router } from "express"
import { v4 } from "uuid"
import User from "./app/models/User"

const routes = new Router()

routes.get('/', async (require, response) => {
  const user = await User.create({
    id:v4(),
    name: "Pedrinho",
    email : "pedrinholindo@email.com" ,
    password_hash : "batman",
  })

  return response.status(201).json(user)
})

export default new Router()