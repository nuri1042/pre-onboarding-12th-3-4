import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import SearchProvider from './context/SearchProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <SearchProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </SearchProvider>
  </>,
);
