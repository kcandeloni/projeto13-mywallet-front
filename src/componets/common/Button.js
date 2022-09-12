import styled from 'styled-components';

export default function Button({
  children,
  size = 'large',
  ...otherProps
}) {
  return (
    <ButtonWrapper {...otherProps} size={size}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
    width: 326px;
    height: 46px;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;

    background-color: #A328D6;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border: none;
    margin: 6px 0;
    ion-icon {
      font-size: 26px;
    }
    
${(props) => {
    if (props.size === 'tiny') {
        return `
            width: 155px;
            height: 114px;
            font-size: 17px;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            padding: 6px 6px;
            p{
              width: 20px;
            }
        `;
    }
}}`;