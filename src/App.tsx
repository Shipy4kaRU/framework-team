import './App.scss';
import { Header, Search, Card, Pagination } from './constants/components';
import { useGetNumberOfPainitngsQuery, useGetPaintingsQuery, useGetAuthorsQuery, useGetLocationsQuery } from './store/api';
import { IAnswer, IPaintings, ILocations, IAuthors } from './interfaces/interfaces';
import { useState, useEffect } from 'react';
import { setAuthors, setLocations } from './store/paintsDataSlice';
import { useAppDispatch } from './store/hooks';

function App() {
  const [page, setPage] = useState<number>(1);
  const [title, setTitle] = useState<string>('');
  const { data: numberOfPaintings } = useGetNumberOfPainitngsQuery<IAnswer<number>>(title);
  const { data = [], isLoading, isError } = useGetPaintingsQuery<IAnswer<IPaintings[]>>({ page, title });
  const { data: authors } = useGetAuthorsQuery<IAnswer<IAuthors[]>>({});
  const { data: locations } = useGetLocationsQuery<IAnswer<ILocations[]>>({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthors(authors));
    dispatch(setLocations(locations));
  }, [authors, locations]);

  const setPageHandler = (page: number) => {
    setPage(page);
  };

  const searchHandler = (title: string) => {
    setTitle(title);
  };

  return (
    <>
      <h1 className="visually-hidden">Картинная галерея</h1>
      <Header />
      <Search onSearch={searchHandler} />
      {data.map((picture, index) => (
        <Card key={index} picture={picture} />
      ))}
      {numberOfPaintings && <Pagination totalPages={Math.ceil(numberOfPaintings / 6)} setPage={setPageHandler} />}
    </>
  );
}

export default App;
