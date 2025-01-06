import './App.scss';
import { Header, Search, Card, Pagination } from './constants/components';

function App() {
  return (
    <>
      <h1 className="visually-hidden">Картинная галерея</h1>
      <Header />
      <Search />
      <Card />
      <Pagination />
    </>
  );
}

export default App;
