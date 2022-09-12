import styled from 'styled-components';

export default function BoxButtons({
  children
}) {
  return (
    <ContainerButtons >
      {children}
    </ContainerButtons>
  );
}

const ContainerButtons = styled.div`
    width: 90vw;
    height: 120px;

    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 15px auto;
`;