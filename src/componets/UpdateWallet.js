import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react"
import UserContext from "../contexts/UserContext.js";
import { newTransaction } from './Service.js';
import { Button, Input } from './common/index.js';
import { Dayjs } from "dayjs";


export default function UpdateWallet ({type, closetab}) {
    const navigate = useNavigate();

    const { dataUser } = useContext(UserContext);
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    let title = type === 'receive'? 'Nova entrada':'Nova saída';

    function handleForm(e) {
        e.preventDefault();
        if(descricao.length < 2 || descricao[0] === ' ' || valor <= 0){
            alert('Verifique os campos!');
            return;
        }
        const newWalletTransaction = {
          descricao,
          valor,
          type: type,
          day: Date.now()
        };
        let wallet = [];
        if(!!dataUser.wallet){
            wallet = dataUser.wallet;
        }
        wallet.push(newWalletTransaction);
        setValor('');
        setDescricao('');
        
        const promise = newTransaction({wallet});

        promise
            .then(resposta => {
                console.log(resposta) 
                navigate('/mywallet');
                closetab(false);})
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
                    type='number'
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
