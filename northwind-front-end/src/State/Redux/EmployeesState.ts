import EmployeeModel from "../../Models/EmployeeModel";

// AppState
export class EmployeesState {
    public employees: EmployeeModel[] = [];
}

// ActionType
export enum EmployeesActionType {
    SetAllEmployees = "SetAllEmployees"
}

// Action
export interface EmployeesAction {
    type: EmployeesActionType;
    payload: any;
}

// Action Creators
export function setAllEmployeesAction(allEmployees: EmployeeModel[]): EmployeesAction {
    return { type: EmployeesActionType.SetAllEmployees, payload: allEmployees };
}

// Reducer
export function employeesReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState {

    const newState = { ...currentState };

    switch (action.type) {
        case EmployeesActionType.SetAllEmployees: 
            newState.employees = action.payload; // here the payload is employees array.
            break;
    }

    return newState;
}