import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import "./Login.css";
import notify from "../../../Services/NotifyService";

function Login(): JSX.Element {

    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm<CredentialsModel>();

    async function submit(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            notify.success("You have been successfully logged-in");
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
            notify.error(error);
        }
    }

    return (
        <div className="Login Box">

            <h2>Login</h2>

            <form onSubmit={handleSubmit(submit)}>

                <label>username: </label>
                <input type="text" {...register("username", {
                    required: { value: true, message: "Missing username" },
                    minLength: { value: 4, message: "Username must be minimum 4 chars" },
                    maxLength: { value: 100, message: "Username can't exceed 100 chars" }
                })} />
                
                <span>{formState.errors.username?.message}</span>

                <label>Password: </label>
                <input type="password" {...register("password", {
                    required: { value: true, message: "Missing password" },
                    minLength: { value: 4, message: "Password must be minimum 4 chars" },
                    maxLength: { value: 100, message: "Password can't exceed 100 chars" }
                })} />
                <span>{formState.errors.password?.message}</span>

                <button>Login</button>

            </form>

        </div>
    );
}

export default Login;
