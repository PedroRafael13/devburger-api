const { Router } = request(express)

const routes = new Router()

routes.get('/', () => {
  return response.status(200).json({message: "Hello World"})
})