import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  position: fixed;
    //display: ${({openMenu}) => openMenu ? "initial" : "none"};
  color: white;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: #1a283a;
  transition: all 0.5s ease-in-out;
  transform: ${({openMenu}) => openMenu ? "translateX(0)" : "translateX(100%)"};
  box-shadow: ${({openMenu}) => openMenu ? "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" : "none"};
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 400px){
    width: 100%;
  }
  
`;

export const CloseMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px !important;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  p {
    font-size: 20px;
    letter-spacing: 0.5px;
    margin-left: 20px;
  }

  svg {
    font-size: 25px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const DrawerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;

  svg {
    cursor: pointer;
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    margin: 0;
    font-size: 12px;
  }
`;