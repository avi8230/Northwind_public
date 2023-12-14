const dal = require("../data-access-layer/dal");
const locations = require("../helpers/locations");
const safeDelete = require("../helpers/safe-delete");

async function getAllProductsAsync() {
    const products = await dal.getAllProductsAsync();
    return products;
};

async function getOneProductAsync(id) {
    const products = await dal.getAllProductsAsync();
    const product = products.find(p => p.id === id);
    return product;
};

async function addProductAsync(product, image) {
    const products = await dal.getAllProductsAsync();
    const maxId = products.reduce((maxId, p) => p.id > maxId ? p.id : maxId, 0);
    product.id = maxId + 1;
    if (image) {
        const extension = image.name.substr(image.name.lastIndexOf("."));
        const imageName = product.id + extension;
        const imageFile = locations.getProductImageFile(imageName);
        await image.mv(imageFile);
        product.imageUrl = "http://localhost:3030/api/products/images/" + imageName;
    }
    products.push(product);
    await dal.saveAllProductsAsync(products);
    return product;
};

async function updateProductAsync(newProduct, image) {
    const products = await dal.getAllProductsAsync();
    const existingProduct = products.find(p => p.id === newProduct.id);
    if (!existingProduct) return null;
    for (const prop in newProduct) {
        if (newProduct[prop] !== undefined) {
            existingProduct[prop] = newProduct[prop];
        }
    }
    if (image) {
        const oldImageName = existingProduct.imageUrl.substr(existingProduct.imageUrl.lastIndexOf("/") + 1);
        let imageFile = locations.getProductImageFile(oldImageName);
        safeDelete(imageFile);
        const extension = image.name.substr(image.name.lastIndexOf("."));
        const newImageName = existingProduct.id + extension;
        imageFile = locations.getProductImageFile(newImageName);
        await image.mv(imageFile);
        existingProduct.imageUrl = "http://localhost:3030/api/products/images/" + newImageName;
    }
    await dal.saveAllProductsAsync(products);
    return existingProduct;
};

async function deleteProductAsync(id) {
    const products = await dal.getAllProductsAsync();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return;
    const oldImageName = products[index].imageUrl.substr(products[index].imageUrl.lastIndexOf("/") + 1);
    const imageFile = locations.getProductImageFile(oldImageName);
    safeDelete(imageFile);
    products.splice(index, 1);
    await dal.saveAllProductsAsync(products);
};

module.exports = {
    getAllProductsAsync,
    getOneProductAsync,
    addProductAsync,
    updateProductAsync,
    deleteProductAsync
};