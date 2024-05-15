import { Router } from "express"
import SessionController from "./app/controllers/SessionController"
import UserController from "./app/controllers/UserController"
import ProductController from "./app/ProductController"

const routes = new Router()

routes.post('/users', UserController.store )
routes.post('/session', SessionController.store)
routes.post('/products', ProductController.store)

export default new Router()