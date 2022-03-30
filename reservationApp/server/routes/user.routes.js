const UserController = require('../controllers/user.controller')

module.exports = (app) => {

    app.get('/api/user', UserController.findAllUsers)
    app.post('/api/user/register', UserController.registerUser)
    app.post('/api/user/login', UserController.login)
    app.get('/api/user/logged_in_user', UserController.loggedInUser)
    app.get('/api/user/logout', UserController.logout)
    app.get('/api/user/:id', UserController.findOneUser)
    app.put('/api/user/:id', UserController.updateOneUser)
    app.delete('/api/user/:id', UserController.deleteOneUser)

}