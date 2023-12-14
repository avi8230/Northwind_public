// npm i notyf
import { Notyf } from "notyf";

class NotifyService {

    private notification = new Notyf({ duration: 4000, position: { x: "center", y: "top" } });

    public success(message: string): void {
        this.notification.success(message);
    }

    public error(err: any): void {
        const message = this.getErrorMessage(err);
        this.notification.error(message);
    }

    private getErrorMessage(err: any): string {

        // throw "some error message..."
        if (typeof err === "string") return err;

        // // Server not sending specific error messages: 
        // if(err.response?.status === 401) return "Incorrect credentials";
        // if(err.response?.status === 403) return "You don't have permission";
        // if(err.response?.status === 400) return "Invalid data";
        // if(err.response?.status === 404) return "Route not found";
        // if(err.response?.status === 500) return "Server error";

        // Server send specific error messages: 
        if (typeof err.response?.data === "string") return err.response.data;
        if (Array.isArray(err.response?.data)) return err.response.data[0];

        // Must be after axios testing
        if (typeof err.message === "string") return err.message;

        return "Some error occurred, please try again";
    }

}

const notify = new NotifyService();

export default notify;