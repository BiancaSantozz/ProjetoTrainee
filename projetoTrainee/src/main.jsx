import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './styles/global.css';
import MainRoutes from './routes.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
