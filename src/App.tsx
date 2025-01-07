import './App.scss';
import { Header, Search, Card, Pagination } from './constants/components';
import { useGetNumberOfPainitngsQuery, useGetPaintingsQuery } from './store/api';
import { IAnswer, IPaintings } from './interfaces/interfaces';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState<number>(1);
  const { data: numberOfPaintings } = useGetNumberOfPainitngsQuery<IAnswer<number>>({});
  const { data = [], isLoading, isError } = useGetPaintingsQuery<IAnswer<IPaintings[]>>({ page, title: '' });
  console.log(data);

  const setPageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <h1 className="visually-hidden">Картинная галерея</h1>
      <Header />
      <Search />
      <Card data={data} />
      <Pagination totalPages={Math.ceil(numberOfPaintings / 6)} setPage={setPageHandler} />
    </>
  );
}

export default App;
