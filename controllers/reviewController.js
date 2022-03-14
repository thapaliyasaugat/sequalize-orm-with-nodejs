const db = require("../models")

const Reviews = db.reviews
//addreview
const addReview = async (req, res) => {
    const info = {
        rating: req.body.rating,
        description: req.body.description
    }
    const rev = await Reviews.create(info)
    res.status(200).json(rev)
}
//deletereview
const deleteReview = async (req, res) => {
    let id = req.params.id
    await Reviews.destroy({ where: { id: id } })
    res.status(200).send("deleted sucessfully")
}
//updatereview
const updateReview = async (req, res) => {
    let id = req.params.id
    const review = await Reviews.update(req.body, { where: { id: id } })
    res.status(200).send(review)
}

module.exports = {
    addReview, deleteReview, updateReview
}