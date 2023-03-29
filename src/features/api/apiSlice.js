import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  endpoints: (builder) => ({
    // api endpoints
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getSingleTodo: builder.query({
      query: (id) => `/todos/${id}`
    })
  }),
});

export const { useGetTodosQuery, useGetSingleTodoQuery } = apiSlice;
