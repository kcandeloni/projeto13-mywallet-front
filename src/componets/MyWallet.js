import React, { useContext, useState, useEffect} from "react"
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

import { getMyWallet } from "./Service.js";

import { Window, BoxButtons, Button } from "./common/index.js";
import NewReceive from "./UpdateWallet";
import UpdateWallet from "./UpdateWallet";

export default function MyWallet() {
    const { dataUser, setDataUser } = useContext(UserContext);
    const [tabUpdate, setTabUpdate] = useState(false);
    const [refrash, setRefrash] = useState(false);
    let type = '';

    useEffect(() => {
        const promise = getMyWallet();
        promise
            .then(resposta => { 
                setDataUser(resposta.data);
            })
            .catch(resposta => {
                console.log(resposta);
            })
      }, [refrash]);

    return (
        <>  <Window>
                {dataUser.wallet > 0 ? 
                    dataUser.wallet.map((elem, index) => <p>`${elem}`</p>) 
                : <Message>'Não há registros de entrada ou saída'</Message>}
            </Window>
            <BoxButtons>
                <Button size={'tiny'} onClick={()=>{type='receive';setTabUpdate(true)}}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </Button>
                <Button size={'tiny'} onClick={()=>{type='pay';setTabUpdate(true)}}>
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