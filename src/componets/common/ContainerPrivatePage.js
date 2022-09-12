import styled from 'styled-components';

export default function ContainerPrivate ({ children,...otherProps }) {
    return (
      <BackgroundPrivate {...otherProps}>
        {children}
      </BackgroundPrivate>
    );
  }

const BackgroundPrivate = styled.div`
  height: calc(100vh - 78px);
  overflow-y: auto;
  `;