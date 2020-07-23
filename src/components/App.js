import React from 'react';
import Navbar from './Navbar';
import Main from '../containers/Main';
import Footer from './Footer';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
