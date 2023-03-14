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

export const LoadingContainer = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgb(81 81 81 / 50%);
  display: flex;
  justify-content: center;
`;