//normal redux

// import {
//   EMPLOYEE_ACTION_TYPES,
//   type EmployeeAction,
//   type EmployeeState,
// } from "./employee.types";


// const initialState: EmployeeState = { employees: [] };
// // type Action =
// //     | { type: "CREATE_EMPLOYEE"; title: string }
// //     | { type: "EDIT_EMPLOYEE"; title: string };

// function employeeReducer(
//   state: EmployeeState = initialState,
//   action: EmployeeAction
// ) {
//   switch (action.type) {
//     case EMPLOYEE_ACTION_TYPES.ADD: {
//       // state.employees.push(action.payload)   won't work
//       // console.log(action.payload);
//       // return state;
//       return {
//         ...state,
//         employees: [...state.employees, action.payload],
//       };
//     }
//     case EMPLOYEE_ACTION_TYPES.DELETE: {
//       return state;
//     }
//     case EMPLOYEE_ACTION_TYPES.UPDATE: {
//       return state;
//     }
//     default:
//       return state;
//   }
// }

// export default employeeReducer;


//react redux toolkit

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
	
import type { Employee, EmployeeState } from './employee.types';

	
const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },

    deleteEmployee: (state, action: PayloadAction<Employee>) => {
      for (let i = 0; i < state.employees.length; i++) {
        if (state.employees[i].employeeId == action.payload.employeeId) {
          state.employees.splice(i, 1); 
          i--;
        }
      }
    }
  },
});

	
export const { addEmployee } = employeeSlice.actions

export const { deleteEmployee } = employeeSlice.actions;
	
export default employeeSlice.reducer;
