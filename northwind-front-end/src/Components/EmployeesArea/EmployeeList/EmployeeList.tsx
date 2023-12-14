import { Component } from "react";
import "./EmployeeList.css";
// import axios from "axios";
import config from "../../../Services/Config";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import authService from "../../../Services/AuthService";
import { Navigate } from "react-router-dom";

interface EmployeeListState {
    employees: EmployeeModel[];
}

class EmployeeList extends Component<{}, EmployeeListState> {

    public async componentDidMount() {
        try {

            // const myAxios = axios.create();
            // myAxios.interceptors.request.use(request => {
            //     console.log("Start Request: ", request);
            //     return request;
            // });
            // myAxios.interceptors.response.use(response => {
            //     console.log("Got Response: ", response);
            //     return response;
            // });

            // if (store.getState().employeesState.employees.length === 0) {
            //     alert("Going to backend");
            //     const response = await loggerAxios.get<EmployeeModel[]>(config.urls.employees);
            //     const allEmployees = response.data;
            //     store.dispatch(setAllEmployeesAction(allEmployees));
            // }
            // this.setState({ employees: store.getState().employeesState.employees });

            // Prevent this component if user is not logged in:
            if (!authService.isLoggedIn()) {
                alert("You are not logged-in");
                return;
            }
            
            this.setState({ employees: await employeesService.getAllEmployees() });

        }
        catch (err: any) {
            alert("Error: " + err.message);
        }
    }

    public render(): JSX.Element {

        // https://stackoverflow.com/questions/70802824/how-to-prevent-react-component-from-rendering-if-not-logged-in
        if (!authService.isLoggedIn()) {
            return <Navigate to="/login" />;
        }

        return (
            <div className="EmployeeList">
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Title</th>
                            <th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state?.employees?.map(emp =>
                            <tr key={emp.id}>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.title}</td>
                                <td>
                                    <img src={config.urls.employeeImages + emp.imageName} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default EmployeeList;