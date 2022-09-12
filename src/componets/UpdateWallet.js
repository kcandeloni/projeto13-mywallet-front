import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react"

import { newTransaction } from './Service.js';
import { Button, Input } from './common/index.js';

export default function UpdateWallet ({type, closetab}) {
    const navigate = useNavigate();
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    let title = type === 'receive'? 'Nova entrada':'Nova saída';

    function handleForm(e) {
        e.preventDefault();
        const body = {
          descricao,
          valor,
          type: type
        };
        setValor('');
        setDescricao('');
        
        const promise = newTransaction(body);

        promise
            .then(() => { 
                navigate('/mywallet');})
            .catch(resposta => {
                console.log(resposta);
                alert('Não foi possível atender a solicitação!');
                closetab(false);})
    }

    return (
        <Container>
            <ContainerUpdate>

                <form onSubmit={handleForm}>
                    <p>{title}</p>
                    <Input
                    type='text'
                    placeholder='Valor'
                    onChange={(e) => setValor(e.target.value)}
                    value={valor}
                    required
                    />

                    <Input
                    type='text'
                    placeholder='Descrição'
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                    required
                    />

                    <Button >Salvar Entrada</Button>
                </form>
            </ContainerUpdate>
        </Container>
    );
}

const ContainerUpdate = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: #8c11be;
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
    z-index: 1;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
            width: 326px;
            margin: 30px 0;
        }
    }
`;

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;
