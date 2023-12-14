const dal = require("../data-access-layer/dal");
const locations = require("../helpers/locations");
const safeDelete = require("../helpers/safe-delete");

async function getAllCategoriesAsync() {
    const categories = await dal.getAllCategoriesAsync();
    return categories;
};

async function getOneCategoryAsync(id) {
    const categories = await dal.getAllCategoriesAsync();
    const category = categories.find(c => c.id === id);
    return category;
};

async function addCategoryAsync(category, image) {
    const categories = await dal.getAllCategoriesAsync();
    const maxId = categories.reduce((maxId, c) => c.id > maxId ? c.id : maxId, 0);
    category.id = maxId + 1;
    if (image) {
        const extension = image.name.substr(image.name.lastIndexOf("."));
        category.imageName = category.id + extension;
        const imageFile = locations.getCategoryImageFile(category.imageName);
        await image.mv(imageFile);
    }
    categories.push(category);
    await dal.saveAllCategoriesAsync(categories);
    return category;
};

async function updateCategoryAsync(newCategory, image) {
    const categories = await dal.getAllCategoriesAsync();
    const existingCategory = categories.find(c => c.id === newCategory.id);
    if (!existingCategory) return null;
    for (const prop in newCategory) {
        if (newCategory[prop] !== undefined) {
            existingCategory[prop] = newCategory[prop];
        }
    }
    if (image) {
        let imageFile = locations.getCategoryImageFile(existingCategory.imageName);
        safeDelete(imageFile);
        const extension = image.name.substr(image.name.lastIndexOf("."));
        existingCategory.imageName = existingCategory.id + extension;
        imageFile = locations.getCategoryImageFile(existingCategory.imageName);
        await image.mv(imageFile);
    }
    await dal.saveAllCategoriesAsync(categories);
    return existingCategory;
};

async function deleteCategoryAsync(id) {
    const categories = await dal.getAllCategoriesAsync();
    const index = categories.findIndex(c => c.id === id);
    if (index === -1) return;
    const imageFile = locations.getCategoryImageFile(categories[index].imageName);
    safeDelete(imageFile);
    categories.splice(index, 1);
    await dal.saveAllCategoriesAsync(categories);
};

module.exports = {
    getAllCategoriesAsync,
    getOneCategoryAsync,
    addCategoryAsync,
    updateCategoryAsync,
    deleteCategoryAsync
};