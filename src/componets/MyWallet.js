import React, { useContext, useState, useEffect} from "react"
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

import { getMyWallet } from "./Service.js";

export default function MyWallet() {

    const { user, setUser } = useContext(UserContext);

    const [refrash, setrefrash] = useState(false);

    useEffect(() => {
        const promise = getMyWallet({});
        promise
            .then(resposta => { 
                setUser({token:user.token, ...resposta.data});
            })
            .catch(resposta => console.log(resposta))
      }, [refrash]);

    return (
        <>
            {user.wallet > 0 ? 
            user.wallet.map((elem, index) => <p>`${elem}`</p>) 
            : <Message>'Não há registros de entrada ou saída'</Message>}
        </>);
}

const Message = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;
`;