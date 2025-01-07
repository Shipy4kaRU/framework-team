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
      query: (arg: { page: number; title: string }) => `/paintings?q=${arg.title}&_page=${arg.page}&_limit=6`,
    }),
    getNumberOfPainitngs: build.query({
      query: () => `/paintings`,
      transformResponse: (response: IPaintings[]) => response.length,
    }),
  }),
});

export const { useGetPaintingsQuery, useGetNumberOfPainitngsQuery } = api;
