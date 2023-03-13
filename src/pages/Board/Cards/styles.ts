import styled from 'styled-components';

const colors = {
  primary: '#F78764',
  secondary: '#666666',
  tertiary: '#ECF0F1',
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;

  gap: 40px;
`;

