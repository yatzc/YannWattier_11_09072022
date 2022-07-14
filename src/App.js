import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Lodging from './pages/Lodging';
import Error from './pages/Error';
import data from './datas/logements.json';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home data={data} />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/lodging/:id" element={<Lodging data={data} />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
        
    );
};

export default App;