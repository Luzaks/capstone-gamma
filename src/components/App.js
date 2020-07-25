import React from 'react';
import Footer from './Footer';
import Routes from '../router/Routes';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;
