import productService from "../services/product.service.js";

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.findProductById(productId);
    // Check if the product is found
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }

    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  // console.log(req.query)
  try {
    const products = await productService.getAllProducts(req.query);
    // console.log(products)
    return res.status(201).send(products);
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error: error.message });
  }
};      
const createMultipleProduct = async (req, res) => {
  try {
    const product = await productService.createMultipleProduct(req.body);
    return res.status(201).send({ message: "Product Created Successfully " });
    // console.log("2");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export default {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
