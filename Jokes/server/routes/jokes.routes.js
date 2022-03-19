const JokesController = require('../controllers/jokes.controller');

module.exports = (app) =>{

    app.get('/api/hello', JokesController.hello)

    app.get('/api/jokes', JokesController.findAllJokes)

    app.get('/api/jokes/:id', JokesController.findOneJoke)

    app.post('/api/jokes', JokesController.createJoke)

    app.post('/api/jokes/:id', JokesController.updateOneJoke)

    app.delete('/api/Jokes/:id', JokesController.deleteOneJoke)
}


