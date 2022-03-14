const db = require("../models")

const Product = db.products
const Reviews = db.reviews


// create product

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}


//get all product

const getAllProducts = async (req, res) => {
    let products = await Product.findAll({
        attributes: [
            'title',
            'price'
        ]
    })
    res.status(200).send(products)
}

// get single product

const getOneProducts = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({
        where: { id: id }
    })
    res.status(200).send(product)
}

// update product

const updateProduct = async (req, res) => {
    let id = req.params.id
    const product = await Product.update(req.body, { where: { id: id } })
    res.status(200).send(product)
}

//delete product by id

const deleteProduct = async (req, res) => {
    let id = req.params.id
    await Product.destroy({ where: { id: id } })
    res.status(200).send("deleted sucessfully")
}
//published product

const getpublishedProduct = async (req, res) => {
    let id = req.params.id
    const products = await Product.findAll({ where: { published: true } })
    res.status(200).send(products)
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProducts,
    updateProduct,
    deleteProduct,
    getpublishedProduct
}