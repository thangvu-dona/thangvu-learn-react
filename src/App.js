// import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/AlbumSong';
import { useEffect } from 'react';
import categoryApi from './api/categoryApi';
import ListPage from './features/Todo/pages/ListPage';
import CounterFeature from './features/Counter';

function App() {
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await categoryApi.getAll({ _limit: 10 });
      console.log(response);
    };

    fetchCategories();
  }, []);

  return (
    <div className="App">
      Header
      <p><Link to='/todos'>Todos</Link></p>
      <p><Link to='/albums'>Albums</Link></p>

      <p><NavLink to='/todos'>Todos</NavLink></p>
      <p><NavLink to='/albums'>Albums</NavLink></p>

      <Routes>
        <Route path='/' Component={CounterFeature} exact />
        <Route path='/todos' Component={TodoFeature} />
        <Route path='/albums' Component={AlbumFeature} />
      </Routes>

      {/* <CounterFeature /> */}

      <ListPage />

      Footer
    </div>
  );
}

export default App;
