import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 0px 16px;
  height: 56px;
  border-radius: 8px;

  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: transparent;

  font-size: 1rem;
  color: #f1f1f1;
  line-height: 150%;
`;
