import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants/url';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getPaintings: build.query({
      query: (title: string) => `/paintings?q=${title}`,
    }),
  }),
});

export const { useGetPaintingsQuery } = api;
