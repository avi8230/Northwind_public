import { SyntheticEvent, useEffect, useState } from "react";
import "./EditProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import config from "../../../Services/Config";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";

interface EditProductProps { }

function EditProduct(props: EditProductProps): JSX.Element {
    const params = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();

    // Set product's current values: 
    useEffect(() => {
        axios.get<ProductModel>(config.urls.products + params.id)
            .then(response => {
                setValue("name", response.data.name);
                setValue("price", response.data.price);
                setValue("stock", response.data.stock);
                setImageSource(response.data.imageUrl);
            })
            .catch(err => alert(err.message));
    }, []);

    // Submit: 
    async function submit(product: ProductModel) {
        try {
            product.id = +params.id;
            await productsService.updateProduct(product);

            alert("Product has been successfully updated.");
            navigate("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    // Handle preview:
    const [imageSource, setImageSource] = useState<string>(null);
    function previewHandler(args: SyntheticEvent): void {
        const image = (args.target as HTMLInputElement).files[0];
        const fileReader = new FileReader();
        fileReader.onload = event => setImageSource(event.target.result.toString());
        fileReader.readAsDataURL(image);
    }

    return (
        <div className="EditProduct Box">

            <h2>Edit Product</h2>

            <form onSubmit={handleSubmit(submit)}>

                <label>Name:</label>
                <input type="text" {...register("name", {
                    required: { value: true, message: "Missing name" },
                    minLength: { value: 2, message: "Name too short" },
                    maxLength: { value: 100, message: "Name too long" }
                })} />
                <span>{formState.errors.name?.message}</span>

                <label>Price:</label>
                <input type="number" step="0.01" {...register("price", {
                    required: { value: true, message: "Missing price" },
                    min: { value: 0, message: "Price can't be negative" },
                    max: { value: 1000, message: "Price can't exceed 1,000" }
                })} />
                <span>{formState.errors.price?.message}</span>

                <label>Stock:</label>
                <input type="number" {...register("stock", {
                    required: { value: true, message: "Missing stock." },
                    min: { value: 0, message: "Stock can't be negative." },
                    max: { value: 10000, message: "Price can't exceed 10,000" }
                })} />
                <span>{formState.errors.stock?.message}</span>

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image")} onChange={previewHandler} />
                <img src={imageSource} />

                <button>Update</button>
                <button type="button" onClick={() => navigate("/products")}>Cancel</button>

            </form>
        </div>
    );
}

export default EditProduct;