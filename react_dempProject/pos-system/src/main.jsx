import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Login from './components/pages/login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>  
)
