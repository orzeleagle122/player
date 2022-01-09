import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  position: fixed;
    //display: ${({openMenu}) => openMenu ? "initial" : "none"};
  color: white;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 10;
  background-color: #1a283a;
  transition: all 0.5s ease-in-out;
  transform: ${({openMenu}) => openMenu ? "translateX(0)" : "translateX(100%)"};
  box-shadow: ${({openMenu}) => openMenu ? "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" : "none"};
  display: flex;
  flex-direction: column;
`;

export const CloseMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 75px !important;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  p {
    margin-left: 20px;
    font-size: 20px;
    letter-spacing: 0.5px;
  }

  svg {
    font-size: 25px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const CardContainer = styled.div`
  max-height: 100%;
  overflow-y: auto;
  align-items: center;
  padding-bottom: 20px;
`;