const express = require("express")
const router = express.Router()

const {
  getAllProduct,
  createProduct,
} = require("../controllers/productController")
const { uploadProductImage } = require("../controllers/uploadsController")

router.route("/").post(createProduct).get(getAllProduct)
router.route("/uploads").post(uploadProductImage)

module.exports = router
