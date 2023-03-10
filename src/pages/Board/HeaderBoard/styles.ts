import styled from 'styled-components';

export const Header = styled.header`
  padding: 36px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.h2`
  
  span:first-child {
    font-weight: 300;
  }
  
  span:last-child {
    text-transform: capitalize;
    font-weight: 700;
  }
`;
