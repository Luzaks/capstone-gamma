import React from 'react';
import NavBar from './Navbar';
import Main from '../containers/Main';
import Footer from './Footer';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
