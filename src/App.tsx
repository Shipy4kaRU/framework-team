import './App.scss';
import { Header, Search, Card, Pagination } from './constants/components';
import { useGetPaintingsQuery } from './store/api';
import { IAnswer, IPaintings } from './interfaces/interfaces';
import { useEffect } from 'react';

function App() {
  const { data = [], isLoading, isError } = useGetPaintingsQuery<IAnswer>('');
  console.log(data);

  return (
    <>
      <h1 className="visually-hidden">Картинная галерея</h1>
      <Header />
      <Search />
      <Card data={data} />
      <Pagination totalPages={data.length} />
    </>
  );
}

export default App;
