import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';

const toastOptions={
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    <Toaster toastOptions={toastOptions} />
  </React.StrictMode>,
)
