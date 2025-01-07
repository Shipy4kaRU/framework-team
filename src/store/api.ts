import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/BASE_URL';
import { checkImageAvailability } from '../helpers/checkImages';
import { IPaintings } from '../interfaces/interfaces';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getPaintings: build.query({
      query: (title: string) => `/paintings?q=${title}`, //&_limit=6
      transformResponse: async (response: IPaintings[]) => {
        console.log('Original Response:', response);
        const images = await Promise.all(
          response.map(async (painting: IPaintings) => {
            const isValidImage: boolean = await checkImageAvailability(`${BASE_URL}${painting.imageUrl}`);
            return { ...painting, isValidImage };
          })
        );
        console.log(`Validate Images:`, images);
        const filteredImages = images.filter((painting) => painting.isValidImage);
        return filteredImages;
      },
    }),
  }),
});

export const { useGetPaintingsQuery } = api;
