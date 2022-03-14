const productController = require("../controllers/productController")

const router = require('express').Router()

router.post('/addProduct', productController.addProduct)
router.get('/getAllProduct', productController.getAllProducts)
router.get('/getProduct/:id', productController.getOneProducts)
router.get('/published', productController.getpublishedProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)
router.put('updateProduct/:id', productController.updateProduct)


module.exports = router