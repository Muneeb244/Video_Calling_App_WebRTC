import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { SocketProvider } from './providers/SocketProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SocketProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
    </SocketProvider>
  </BrowserRouter>
)
