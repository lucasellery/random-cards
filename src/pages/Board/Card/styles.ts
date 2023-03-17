import styled from 'styled-components';

const colors = {
  primary: '#F78764',
  secondary: '#666666',
  tertiary: '#ECF0F1',
};

export const CardContainer = styled.div`
  height: 450px;
  width: 350px;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  overflow: hidden;

  @media only screen and (min-width: 760px) {
    height: 440px;
    width: 320px;
  }
`;

export const CardHeader = styled.header`
  background-color: ${colors.tertiary};
  height: 15%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 14px;

  color: ${colors.secondary};

  border-color: ${colors.primary};
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

export const Logo = styled.div`
  font-size: 1rem;
`;

export const Points = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
`;

export const Main = styled.main`
  background-color: ${colors.tertiary};
  height: 60%;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  background-color: ${colors.tertiary};
  height: 25%;
  position: sticky;

  padding: 8px 5px 0px 14px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column wrap;

  color: ${colors.secondary};
  font-weight: 600;

  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;

  gap: 3px;

  span:first-child {
    font-size: 1rem;
  }

  span:last-child {
    font-weight: 500;
    font-size: 0.8rem;
  }
`;

export const PopoverContent = styled.p`
  z-index: 5;
  color: #fff;
  width: 400px;
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  transition: opacity 0.3s ease;

  background-color: #010101;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
