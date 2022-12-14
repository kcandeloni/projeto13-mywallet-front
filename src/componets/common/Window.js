import styled from 'styled-components';

export default function Window({
  children
}) {
  return (
    <Box >
      {children}
    </Box>
  );
}

const Box = styled.div`
    width: 90vw;
    height: 65vh;

    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    margin: 0 auto;
    padding: 16px 16px 28px 16px;
    overflow-y: scroll;
`;