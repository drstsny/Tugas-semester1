// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './component/Landing-page';
import Login from './pages/Login'
import Register from './pages/Register';
import Customer from './customer/Customer';
import Data from './pages/Barang';
import Detail from './pages/detail';
// import Edit from './pages/edit'
import Add from './pages/tambah';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/barang" element={<Data />} />
                <Route path="/detail" element={<Detail />} />
                {/* <Route path="/edit" element={<Edit />} /> */}
                <Route path="/tambah" element={<Add />} />

            </Routes>
        </Router>
    );
}

export default App;
