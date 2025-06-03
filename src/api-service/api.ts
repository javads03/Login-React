import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      //retrive token from state
      const token = localStorage.getItem("token");
      console.log("token", token);

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Employee","Department"],
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

export default baseApi;
