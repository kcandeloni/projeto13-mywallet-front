import { Logo } from '../assets/img/Logo.js';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react"
import UserContext from "../contexts/UserContext";

import { login, setToken, getToken} from './Service.js';
import { ContainerLogin, Button, Input, TextLink } from './common/index.js';

export default function Login () {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const persistencia = getToken();
        
        if(!!persistencia.headers){
            navigate('/mywallet');
        }
      }, []);

    function handleForm(e) {
        e.preventDefault();
        const body = {
          email,
          password
        };
        setEmail('');
        setPassword('');
        
        const promise = login(body);

        promise
            .then(resposta => { 
                setToken(resposta.data, setUser);
                navigate('/mywallet');})
            .catch(resposta => {
                console.log(resposta);
                alert('Dados Inválidos!')})
    }

    return (
        <ContainerLogin>
            <Logo />

            <form onSubmit={handleForm}>
                
                <Input
                type='text'
                placeholder='E-mail'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />

                <Input
                type='password'
                placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />

                <Button >Entrar</Button>
            </form>
            

            <Link to='/cadastro'>
                <TextLink>Primeira vez? Cadastre-se!</TextLink>
            </Link>
        </ContainerLogin>
    );
}