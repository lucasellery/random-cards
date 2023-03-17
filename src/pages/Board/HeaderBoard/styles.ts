import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const UserName = styled.p`
  font-size: 1.5rem;

  span:first-child {
    font-weight: 300;
  }

  span:last-child {
    text-transform: capitalize;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
