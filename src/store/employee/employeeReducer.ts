import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";

const initialState: EmployeeState = { employees: [] };
// type Action =
//     | { type: "CREATE_EMPLOYEE"; title: string }
//     | { type: "EDIT_EMPLOYEE"; title: string };

function employeeReducer(
  state: EmployeeState = initialState,
  action: EmployeeAction
) {
  switch (action.type) {
    case EMPLOYEE_ACTION_TYPES.ADD: {
      // state.employees.push(action.payload)   won't work
      // console.log(action.payload);
      // return state;
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    }
    case EMPLOYEE_ACTION_TYPES.DELETE: {
      return state;
    }
    case EMPLOYEE_ACTION_TYPES.UPDATE: {
      return state;
    }
    default:
      return state;
  }
}

export default employeeReducer;
