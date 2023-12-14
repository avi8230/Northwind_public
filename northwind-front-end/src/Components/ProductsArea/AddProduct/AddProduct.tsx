import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
// npm i react-hook-form
import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import { SyntheticEvent, useState } from "react";
import productsService from "../../../Services/ProductsService";
import notify from "../../../Services/NotifyService";

function AddProduct(): JSX.Element {

    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<ProductModel>();

    async function submit(product: ProductModel) {
        // console.log(product);

        // דרך 1
        try {
            // product.price = -10;
            // debugger;
            // בשליחת קובץ
            await productsService.addProduct(product);

            // בשליחה מידע ללא קובץ
            // const response = await axios.post<ProductModel>(config.urls.products, product);

            notify.success("Product has been successfully added.");
            navigate("/products");
        }
        catch (error: any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser 
                // and an instance of http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            notify.error(error);
        }

        // דרך 2
        // const formData = new FormData();
        // formData.append("name", product.name);
        // formData.append("price", product.price.toString());
        // formData.append("stock", product.stock.toString());
        // formData.append("image", product.image.item(0));
        // const response = await axios.post<ProductModel>(config.urls.products, formData)
        //     .then(response => {
        //         alert("Product has been successfully added. new id: " + response.data.id);
        //         navigate("/products");
        //     })
        //     .catch(error => {
        //         if (error.response) {
        //             // The request was made and the server responded with a status code
        //             // that falls out of the range of 2xx
        //             console.log(error.response.data);
        //             console.log(error.response.status);
        //             console.log(error.response.headers);
        //         } else if (error.request) {
        //             // The request was made but no response was received
        //             // `error.request` is an instance of XMLHttpRequest in the browser 
        //             // and an instance of http.ClientRequest in node.js
        //             console.log(error.request);
        //         } else {
        //             // Something happened in setting up the request that triggered an Error
        //             console.log('Error', error.message);
        //         }
        //         alert("Error: " + error.message);
        //     });
    }

    const [imageSource, setImageSource] = useState<string>(null);

    function previewHandler(args: SyntheticEvent): void {
        const image = (args.target as HTMLInputElement).files[0];
        const fileReader = new FileReader();
        fileReader.onload = (event: ProgressEvent) => {
            const base64Image = (event.target as FileReader).result.toString();
            setImageSource(base64Image);
        }
        fileReader.readAsDataURL(image);
    }

    return (
        <div className="AddProduct Box">

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit(submit)}>

            <label>Name: </label>
                <input type="text" autoFocus {...register("name", { required: true, minLength: 2, maxLength: 100 })} />
                {formState.errors.name?.type === "required" && <span>Missing name</span>}
                {formState.errors.name?.type === "minLength" && <span>Name too short</span>}
                {formState.errors.name?.type === "maxLength" && <span>Name too long</span>}

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price", {
                    required: { value: true, message: "Missing price" },
                    min: { value: 0, message: "Price can't be negative" },
                    max: { value: 1000, message: "Price can't exceed 1,000" }
                })} />
                <span>{formState.errors.price?.message}</span>


                <label>Stock: </label>
                <input type="number" {...register("stock", {
                    required: { value: true, message: "Missing stock" },
                    min: { value: 0, message: "Stock can't be negative" },
                    max: { value: 10000, message: "Stock can't exceed 10,000" }
                })} />
                <span>{formState.errors.stock?.message}</span>

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image", {
                    required: { value: true, message: "Missing image" }
                })} onChange={previewHandler} />
                <img src={imageSource} />
                <span>{formState.errors.image?.message}</span>

                <button>Add</button>
                <button onClick={() => navigate("/products")}>Cancel</button>

            </form>

        </div>
    );
}

export default AddProduct;
