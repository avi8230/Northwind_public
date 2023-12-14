// התקנת צד שרת:
// https://www.npmjs.com/package/northwind-back-end
// npm i -g northwind-back-end
// northwind
interface ProductModel {
    id: number;
    name: string;
    price: number;
    stock: number;
    imageUrl: string;
    image: FileList;
}

export default ProductModel;