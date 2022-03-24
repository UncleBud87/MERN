const ThingsController = require('../controllers/thing.controller');

module.exports = (app) => {

    app.get('/api/things', ThingsController.findAllThings)

    app.post('/api/things', ThingsController.createThing)

    app.get('/api/things/:id', ThingsController.findOneThing)

    app.put('/api/things/:id', ThingsController.updateOneThing)

    app.delete('/api/things/:id', ThingsController.deleteOneThing)
}


