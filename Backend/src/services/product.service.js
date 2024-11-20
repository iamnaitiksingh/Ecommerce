import Category from "../models/category.module.js";
import Product from "../models/product.model.js";

async function createProduct(reqData) {
  // console.log("reqData",reqData.topLavelCategory)
  let topLevel = await Category.findOne({ name: reqData.topLavelCategory });
  // console.log("topLevel",topLevel)

  if (!topLevel) {
    console.log("1");
    topLevel = new Category({
      name: reqData.topLavelCategory,
      level: 1,
    });
    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLavelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    console.log("2");
    secondLevel = new Category({
      name: reqData.secondLavelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLavelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    console.log("3");
    thirdLevel = new Category({
      name: reqData.thirdLavelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discounrPersent: reqData.discounrPersent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });
  return await product.save();
}
async function deleteProduct(productId) {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);

  return "Product deleted SuccessFully";
}
async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id) {
  const product = await Product.findById(id).populate("category").exec();

  if (!product) {
    throw new Error("Product not found with id " + id);
  }
  return product;
}

async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  pageSize = pageSize || 10; // chat gpt

  let query = Product.find().populate("category");
  // return { content: [query], curentPage: 1, totalPages: 0 }
  //  category

  if (category) {
    // console.log("category => ", category);
    if (category == "undefined") {
    } else {
      const existCategory = await Category.findOne({
        name: category || "tops",
      });
      // console.log("category => ", existCategory);

      if (existCategory) {
        query = query.where("category").equals(existCategory._id);
      } else {
        return { content: [], curentPage: 1, totalPages: 0 };
      }
    }
  }

  // color

  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );
    console.log(...colorSet)
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query = query.where("color").regex(colorRegex);
  }

  // sizes

  if (sizes) {
    const sizesSet = new Set(sizes);
    query.query.where("sizes.name").in([...sizesSet]);
  }

  if (minPrice && maxPrice) {
    query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }

  // if (minDiscount) {
  //   query = query.where("discountPersent").gte(minDiscount);
  // }

  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock == "out_of_stock") {
      query = query.where("quantity").gt(1);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_hight" ? -1 : 1; 
    query = query.sort({ discontedPrice: sortDirection });
  }
console.log(query)
  // const totalProducts = await Product.countDocuments(query);
  const totalProducts = await query.clone().countDocuments(); // Clone query to avoid execution issues
// console.log(totalProducts)
  const skip = (pageNumber - 1) * pageSize;

  query = query.skip(skip).limit(pageSize);

  const products = await query.exec();
  const totalPages = Math.ceil(totalProducts / pageSize);

  // console.log({ content: products, curentPage: pageNumber, totalPages })

  return { content: products, curentPage: pageNumber, totalPages };
}

async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

export default {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
