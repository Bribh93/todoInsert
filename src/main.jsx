import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//theme primeReact
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
        

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
