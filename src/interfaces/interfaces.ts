export interface IAnswer<T> {
  data: T;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface IPaintings {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
  isValidImage: boolean;
}
