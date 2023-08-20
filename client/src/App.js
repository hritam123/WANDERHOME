import React from 'react';
import BottomNav from './components/BottomNav';
import Loading from './components/Loading';
import NavBar from './components/Navbar';
import Notification from './components/Notification';
import Login from './components/user/Login';
import Room from './components/rooms/Room';

const App = () => {
  return (
    <>
      <Loading />
      <Notification />
      <Login />
      <NavBar />
      <BottomNav />
      <Room/>
    </>
  );
};

export default App;