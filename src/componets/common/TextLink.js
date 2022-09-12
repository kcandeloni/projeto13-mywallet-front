import styled from 'styled-components';

export default function TextLink({
  children,
  ...otherProps
}) {
  return (
    <Link {...otherProps}>
      {children}
    </Link>
  );
}

const Link = styled.p`
    font-weight: 700;
    font-size: 15px;
    text-decoration-line: none;
    margin-top: 32px;
    color: #FFFFFF;
    cursor: pointer;
`;