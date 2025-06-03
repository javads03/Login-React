export interface Address {
  houseNo: string;
  line1: string;
  line2: string;
  pincode: string;
}

export interface Department {
  id: number;
  name: string;
}

// export const EmployeeRole = {
//   Role: "Role",
//   UI: "UI",
//   UX: "UX",
//   DEVELOPER: "DEVELOPER",
//   HR: "HR",
// } as const;

// export type Role = (typeof EmployeeRole)[keyof typeof EmployeeRole];

// export const EmployeeStatus = {
//   Status: "Status",
//   ACTIVE: "ACTIVE",
//   INACTIVE: "INACTIVE",
//   PROBATION: "PROBATION",
// } as const;

// export type Status = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];

export interface EmployeeListResponse {
  employeeId: string;
  email: string;
  name: string;
  age: number;
  address: Address;
  password: string;
  role: string;
  dataOfJoining: string;
  //dateOfJoining: Date;
  experience: number;
  status: string;
  department: Department;
  id?: number;
}

export interface EmployeeCreatePayload {
  employeeId: string;
  email: string;
  name: string;
  age: number;
  address: Address;
  password: string;
  role: string;
  dataOfJoining: Date | null;
  //dateOfJoining: Date;
  experience: number;
  status: string;
  departmentId: number;
  id?: number;
}

// export interface ID {
//     id: number;
// }
