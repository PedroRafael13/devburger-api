import { Router } from "express"
import multer from "multer"
import ConfigMulter from "./config/multer"
import SessionController from "./app/controllers/SessionController"
import UserController from "./app/controllers/UserController"
import ProductController from "./app/controllers/ProductController"
import authMiddleware from "./middleware/auth"

const routes = new Router()

const upload = multer(ConfigMulter)

routes.post('/users', UserController.store )
routes.post('/session', SessionController.store)

routes.use(authMiddleware)
routes.post('/products', upload.single('file') , ProductController.store)
routes.get('/products', ProductController.index )

export default new Router()