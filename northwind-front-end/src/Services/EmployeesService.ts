import axios from 'axios';
import store from "../State/Redux/Store";
import config from './Config';
import EmployeeModel from '../Models/EmployeeModel';
import { setAllEmployeesAction } from '../State/Redux/EmployeesState';
// import authService from './AuthService';

class EmployeesService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {
        if (store.getState().employeesState.employees.length === 0) {
            // Without JWT Interceptor: 
            // const headers = { authorization: "Bearer " + authService.token };
            // const response = await axios.get<EmployeeModel[]>(config.urls.employees, { headers });

            // With JWT Interceptor: 
            const response = await axios.get<EmployeeModel[]>(config.urls.employees);

            const employees = response.data;
            store.dispatch(setAllEmployeesAction(employees));
        }
        return store.getState().employeesState.employees;
    }

}

const employeesService = new EmployeesService();

export default employeesService;