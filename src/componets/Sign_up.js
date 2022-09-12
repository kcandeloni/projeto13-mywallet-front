import { Logo } from '../assets/img/Logo.js';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react"

import { singUp } from './Service.js';
import { ContainerLogin, Button, Input, TextLink } from './common/index.js';

export default function SignUp () {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmePassword, setConfirmePassword] = useState('');

    function handleForm(e) {
        e.preventDefault();

        if(password !== confirmePassword){
            alert('Senhas Distintas!\n')
            setPassword('');
            setConfirmePassword('');
            return;
        }
        const body = {
            name,
            email,
            password
        };
        setName('');
        setEmail('');
        setPassword('');
        setConfirmePassword('');
        
        const promise = singUp(body);

        promise
            .then(resposta => {
                if(resposta.statusText === 'Created'){
                    navigate('/');
                }})
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
                placeholder='Nome'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />

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

            <Input
                type='password'
                placeholder='Confirme a senha'
                onChange={(e) => setConfirmePassword(e.target.value)}
                value={confirmePassword}
                required
            />

            <Button size='large' >Cadastrar</Button>
        </form>


        <Link to='/'>
            <TextLink>Já tem uma conta? Entre Agora!</TextLink>
        </Link>
    </ContainerLogin>
);
}