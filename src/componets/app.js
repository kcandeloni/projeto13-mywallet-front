import React from "react";
import { GlobalStyle } from './common/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Sign_up.js';
import Cadastro from './Sign_in.js';

export default function App() {

    return (
        <>
        <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/cadastro' element={<Cadastro />}/>
                </Routes>
            </BrowserRouter>
      </>
    );
}