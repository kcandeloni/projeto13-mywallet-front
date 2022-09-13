import styled from 'styled-components';

export default function ContainerWalletBox({
  children
}) {
  return (
    <Box >
      {children}
    </Box>
  );
}

const Box = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;