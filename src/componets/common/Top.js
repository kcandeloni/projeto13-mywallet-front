import React, { useContext } from "react"
import UserContext from "../../contexts/UserContext.js";
import styled from 'styled-components';

export default function Top() {
  
  const { user } = useContext(UserContext);


  return(
      <TopoApp>
            <DivName>
                {!!user.name ? 'Olá, ':`Olá, ${user.name}`}
            </DivName> 
            <IconExit>
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
`;

const DivName = styled.div`
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
`;