import React from 'react';
import Loading from './components/Loading';
import NavBar from './components/Navbar';
import Notification from './components/Notification';
import Login from './components/user/Login';

const App = () => {
  return (
    <>
      <Loading />
      <Notification />
      <Login />
      <NavBar />
    </>
  );
};

export default App;