const express = require('express')
const cors = require("cors")
const productRouter = require('./routes/productRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routers

app.use('/api/products', productRouter)
app.use('/api/reviews', productRouter)

app.get("/", (req, res) => {
    res.status(200).json("working")
})
app.post("/", (req, res) => {
    console.log(req.body)
    res.status(200).json("working")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

