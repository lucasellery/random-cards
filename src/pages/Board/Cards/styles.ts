import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  gap: 40px;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
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