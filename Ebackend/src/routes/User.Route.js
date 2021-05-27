import UserController from '../controllers/User.controller.js'

const routes = (application) =>{
    application.post('/user', UserController.createUser)
    application.get('/user', UserController.getAllUsers)
    application.get('/user/:userId', UserController.getUserById )
    application.delete('/user/:userId', UserController.deleteUserById )
    application.put('/user/:userId', UserController.updateUser )
    application.get('/search', UserController.getUserWithQuery)
}

export default { routes }
