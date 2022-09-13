import React, { useContext, useState, useEffect} from "react"
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { getMyWallet } from "./Service.js";

import { Window, BoxButtons, Button, BoxLineWallet,
    ContainerWalletBox } from "./common/index.js";
import UpdateWallet from "./UpdateWallet";

function RenderWallet ({t}) {
    return(
        <>
            <BoxLineWallet type={t.type}>
                <>
                <p>{dayjs(t.day).format('DD/MM')}</p>
                <h4>{t.descricao}</h4>
                <h5>{t.valor}</h5>
                </>
            </BoxLineWallet>
        </>
    );
}

export default function MyWallet() {
    const { dataUser, setDataUser } = useContext(UserContext);
    const [tabUpdate, setTabUpdate] = useState(false);
    const [type, setType] = useState('');
    const [refresh, setRefresh] = useState(false);
    const navigate= useNavigate();
    const [total, setTotal] = useState({type: '', value: 0});

    useEffect(() => {
        const promise = getMyWallet();
        promise
            .then(resposta => { 
                setDataUser(resposta.data);
            })
            .catch(resposta => {
                console.log(resposta);
                localStorage.clear('mywallet');
                setDataUser({});
                navigate('/');
            })
        }, []);
        if(!!dataUser.wallet && !refresh){ 
            let soma = 0;
                dataUser.wallet.map(e => {if(e.type === 'receive'){
                    soma += Number(e.valor);
                }else {
                    soma -= Number(e.valor);
                }
            })
            let totalType = (soma < 0) ? 'pay': 'receive';
            setTotal({type:totalType, value: soma})
            setRefresh(!refresh)
        }
    return (
        <>  <Window>
                {refresh ? <div><ContainerWalletBox>
                    {dataUser.wallet.map((elem, index) => <RenderWallet key={index} t={elem}/>)} 
                    </ContainerWalletBox>
                    <BoxLineWallet type={total.type}>
                        <>
                            <h6>SALDO</h6>
                            <h5>{total.value}</h5>
                        </>
                    </BoxLineWallet>
                    </div>
                : <Message>'Não há registros de entrada ou saída'</Message>}
            </Window>
            <BoxButtons>
                <Button size={'tiny'} onClick={()=>{setType('receive');setTabUpdate(true)}}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </Button>
                <Button size={'tiny'} onClick={()=>{setType('pay');setTabUpdate(true)}}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saída</p>                    
                </Button>
            </BoxButtons>
            {tabUpdate ? <UpdateWallet
                type={type}
                closetab={setTabUpdate}
                /> : ''}
        </>);
}

const Message = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;
`;