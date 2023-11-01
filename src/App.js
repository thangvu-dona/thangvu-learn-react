// import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/AlbumSong';

function App() {
  return (
    <div className="App">
      Header
      <p><Link to='/todos'>Todos</Link></p>
      <p><Link to='/albums'>Albums</Link></p>

      <p><NavLink to='/todos' activeClassName="active-menu">Todos</NavLink></p>
      <p><NavLink to='/albums'>Albums</NavLink></p>

      <Routes>
        <Route path='/todos' Component={TodoFeature} />
        <Route path='/albums' Component={AlbumFeature} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
