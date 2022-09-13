import styled from 'styled-components';

export default function BoxLineWallet({
  children,
  type
}) {
  return (
    <BoxWallet type={type}>
      {children}
    </BoxWallet>
  );
}

const BoxWallet = styled.div`
    width: 90vw;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
        width: 15vw;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }
    h4{
        width: 50vw;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        word-break: break-all;
    }
    h5{
        width: 20vw;
        text-align: end;
        padding: 0 16px ;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #03AC00;
        ${(props) => {
          if (props.type === 'pay') {
            return `
              color: #C70000;
            `;
          }
        }}
    }
    h6{
        width: 60vw;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
`;