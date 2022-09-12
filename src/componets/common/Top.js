import React, { useContext } from "react"
import UserContext from "../../contexts/UserContext.js";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function Top() {
    const { setDataUser } = useContext(UserContext);

    const navigate= useNavigate();
    const { dataUser } = useContext(UserContext);
    return(
        <TopoApp>
            <DivName>
                {!dataUser.name ? 'Olá, ':`Olá, ${dataUser.name}`}
            </DivName> 
            <IconExit onClick={()=> {
                localStorage.clear('mywallet');
                setDataUser({});
                navigate('/');}
            }>
                <ion-icon name="exit-outline"></ion-icon>
            </IconExit>
        </TopoApp>);
}

const TopoApp = styled.div`
  width: 100%;
  height: 78px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const IconExit = styled.div`
    font-size: 24px;
    color: #FFFFFF;
    cursor: pointer;
`;

const DivName = styled.div`
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
`;