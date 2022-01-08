import styled from 'styled-components'

export const Drawer = styled.div`
  width: 400px;
  position: fixed;
    //display: ${({openMenu}) => openMenu ? "initial" : "none"};
  display: initial;
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
  justify-content: flex-end;
  align-items: center;
  height: 65px;
  margin-right: 20px;

  svg {
    font-size: 25px;
    cursor: pointer;
  }
`;

