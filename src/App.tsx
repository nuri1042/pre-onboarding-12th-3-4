import { Outlet } from 'react-router-dom';
import './App.css';
import SearchProvider from './context/SearchProvider';

function App() {
  return (
    <>
      <SearchProvider>
        <Outlet />
      </SearchProvider>
    </>
  );
}

export default App;
