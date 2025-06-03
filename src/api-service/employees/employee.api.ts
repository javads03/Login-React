import type { deleteEmployee } from "../../store/employee/employeeReducer";
import baseApi from "../api";
import type { EmployeeCreatePayload, EmployeeListResponse } from "./types";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    employeeList: builder.query<Array<EmployeeListResponse>, void>({
      query: (payload) => ({
        url: "/employee",
        method: "GET",
        body: payload,
      }),
      providesTags: ["Employee"],
    }),
    employeeById: builder.query<EmployeeListResponse, number>({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
        
      }),
      providesTags: ["Employee"],
    }),
    deleteEmployee: builder.mutation<void, number>({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employee"],
    }),
    createEmployee: builder.mutation<void, EmployeeCreatePayload>({
      query: (payload) => ({
        url: `/employee`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Employee"],
    }),
    updateEmployee: builder.mutation<void, EmployeeCreatePayload>({
      query: (payload) => ({
        url: `/employee/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Employee"],
    }),
  }),
});

export const { useEmployeeListQuery, useEmployeeByIdQuery, useDeleteEmployeeMutation, useCreateEmployeeMutation, useUpdateEmployeeMutation} = employeeApi;
