const ProductsController = require('../controllers/products.controller');

module.exports = (app) =>{

    app.get('/api/hello', ProductsController.hello)

    app.get('/api/products', ProductsController.findAllProducts)

    app.post('/api/products', ProductsController.createProduct)

    app.get('/api/products/:id', ProductsController.findOneProduct)

    app.post('/api/products/:id', ProductsController.updateOneProduct)

    app.delete('/api/products/:id', ProductsController.deleteOneProduct)
}


