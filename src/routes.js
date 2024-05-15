import { Router } from "express"
import SessionController from "./app/controllers/SessionController"
import UserController from "./app/controllers/UserController"

const routes = new Router()

routes.get('/users', UserController.store )
routes.get('/session', SessionController.store)

export default new Router()