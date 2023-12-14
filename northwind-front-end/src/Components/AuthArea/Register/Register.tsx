import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import "./Register.css";

function Register(): JSX.Element {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<UserModel>();

    async function submit(user: UserModel) {
        try {
            await authService.register(user);
            alert("You have been successfully registered");
            navigate("/home");
        }
        catch (error: any) {
            if (error.response) {
                console.log("error.response :" + error.response.data);
                console.log("error.response :" + error.response.status);
                console.log("error.response :" + error.response.headers);
            } else if (error.request) {
                console.log("error.request :" + error.request);
            } else {
                console.log("Any error :", error.message);
            }
            alert("Error: " + error.message);
        }
    }

    return (
        <div className="Register Box">

            <h2>Register</h2>

            <form onSubmit={handleSubmit(submit)}>

                <label>First name: </label>
                <input type="text" autoFocus {...register("firstName")} />

                <label>Last name: </label>
                <input type="text" {...register("lastName")} />

                <label>username: </label>
                <input type="text" {...register("username")} />

                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button>Register</button>

            </form>

        </div>
    );
}

export default Register;
