import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import ProtectedRoute from './Components/Routing/ProtectedRoute';
import Admin from './Pages/Admin';

const App = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </UserAuthContextProvider>
    </>
  );
};

export default App;
