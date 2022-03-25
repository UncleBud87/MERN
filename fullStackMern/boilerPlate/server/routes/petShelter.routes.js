const PetsController = require('../controllers/petShelter.controller');

module.exports = (app) => {

    app.get('/api/pet', PetsController.findAllPets)

    app.post('/api/pet', PetsController.createPet)

    app.get('/api/pet/:id', PetsController.findOnePet)

    app.put('/api/pet/:id', PetsController.updateOnePet)

    app.delete('/api/pet/:id', PetsController.deleteOnePet)
}


