import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/BASE_URL';
import { IPaintings } from '../interfaces/interfaces';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getPaintings: build.query({
      query: (arg: { page: number; title: string }) => `/paintings?q=${arg.title}&_limit=6&_page=${arg.page}`,
    }),
    getPagesNumber: build.query({
      query: (title: string) => `/paintings?q=${title}`,
      transformResponse: (response: IPaintings[]) => Math.ceil(response.length / 6),
    }),
  }),
});

export const { useGetPaintingsQuery, useGetPagesNumberQuery } = api;
