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

export interface IAuthors {
  id: number;
  name: string;
}

export interface ILocations {
  id: number;
  location: string;
}

export interface IPaintsData {
  authors: IAuthors[];
  locations: ILocations[];
}
