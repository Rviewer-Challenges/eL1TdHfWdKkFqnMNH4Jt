import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './globals/index.css';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
