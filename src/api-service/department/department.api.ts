
import baseApi from "../api";
import type { Department } from "./types";


export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    departmentList: builder.query<Array<Department>, void>({
      query: (payload) => ({
        url: "/department",
        method: "GET",
        body: payload,
      }),
      providesTags: ["Department"],
    }),
    
  }),
});

export const {
  useDepartmentListQuery
  
} = departmentApi;
