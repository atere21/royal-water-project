import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  },
]);

const App = () => (

    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );


export default App;


// https://getform.io/f/72ee2a52-9a2d-45e0-abe8-21758f060c4a