import React, { useState } from "react";
import { GlobalStyle } from './common/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from "../contexts/UserContext";

import Login from './Sign_in.js';
import Cadastro from './Sign_up.js';
import PrivatePage from "./PrivatePage";
import MyWallet from "./MyWallet.js";

export default function App() {

    const [user, setUser] = useState({});

    return (
        <>
        <GlobalStyle />
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />}/>
                        <Route path='/cadastro' element={<Cadastro />}/>
                        <Route path='/mywallet' element={
                            <PrivatePage>
                                <MyWallet />
                            </PrivatePage>}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
      </>
    );
}