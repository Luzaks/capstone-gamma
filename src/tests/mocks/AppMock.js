import React from 'react';
import { Provider } from 'react-redux';
import Footer from '../../components/Footer';
import Routes from '../../router/Routes';
import '../../styles/App.css';
import store from '../../Redux/store/store';

function AppMock() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
        <Footer />
      </div>
    </Provider>
  );
}

export default AppMock;
