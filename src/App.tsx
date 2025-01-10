import './App.scss';
import { Header, Search, Card, Pagination, ItemsList } from './constants/components';
import { cardsPlaceholder } from './constants/cardsPlaceholder';
import { useGetPagesNumberQuery, useGetPaintingsQuery } from './store/api';
import { IAnswer, IPaintings, ILocations, IAuthors } from './interfaces/interfaces';
import { useState, useEffect } from 'react';
import { setAuthors, setLocations } from './store/paintsDataSlice';
import { useAppDispatch } from './store/hooks';
import { BASE_URL } from './constants/BASE_URL';
import axios from 'axios';

function App() {
  const dispatch = useAppDispatch();
  let [page, setPage] = useState<number>(1);
  const [title, setTitle] = useState<string>('');
  const { data: pagesNumber } = useGetPagesNumberQuery<IAnswer<number>>(title);

  useEffect(() => {
    if (pagesNumber && pagesNumber < page) {
      setPage(pagesNumber);
    }
  }, [pagesNumber, page]);

  const { data = [], isLoading, isError } = useGetPaintingsQuery<IAnswer<IPaintings[]>>({ page, title });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [authors, locations] = await Promise.all([
          axios.get<IAuthors[]>(`${BASE_URL}/authors`),
          axios.get<ILocations[]>(`${BASE_URL}/locations`),
        ]);
        if (authors.status === 200) dispatch(setAuthors(authors.data));
        else console.log('Ошибка загрузки авторов:', authors.statusText);
        if (locations.status === 200) dispatch(setLocations(locations.data));
        else console.log('Ошибка загрузки локаций:', locations.statusText);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Ошибка Axios:', err.message);
        } else {
          console.error('Неизвестная ошибка:', err);
        }
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Search onSearch={(title: string) => setTitle(title)} />
      <ItemsList
        items={isLoading || isError ? cardsPlaceholder : data}
        renderItem={(picture: IPaintings, index: number) => (
          <Card key={index} picture={picture} isLoading={isLoading} isError={isError} />
        )}
      />
      {Boolean(pagesNumber) && (
        <Pagination totalPages={pagesNumber} currentPage={page} setPage={(page: number) => setPage(page)} />
      )}
    </>
  );
}

export default App;
