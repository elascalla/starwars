import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './pages/Header';

import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
