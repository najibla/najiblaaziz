import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Main from './Components/main/main';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
