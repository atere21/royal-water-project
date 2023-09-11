import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import RoomProvider from './context/RoomContext';
import ContactUs from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  },

  {
    path: 'contact',
    element: <ContactUs />,
  },

]);

const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);

  const root = ReactDOM.createRoot( document.getElementById('root'));
  root.render(
  <RoomProvider>
  <React.StrictMode>  
    <App />
  </React.StrictMode>
  </RoomProvider>

);
