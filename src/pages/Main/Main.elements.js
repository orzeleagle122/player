import styled from 'styled-components'

export const Drawer = styled.div`
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
  min-height: 70px !important;
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

export const Card = styled.div`
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin: 10px;
  height: 150px;
  background-image: ${({image}) => `url(${image})`};
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  transition: 0.25s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    justify-content: space-between;
  }

  &:hover div p {
    display: initial;
    text-overflow: initial;
    white-space: normal;
  }

  &:hover svg {
    display: initial;
  }

  svg {
    font-size: 24px;
    display: none;
  }
`;

export const CardContent = styled.div`
  p {
    color: #cecece;
    transition: 0.25s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
    margin: 0;
  }

  h3 {
    margin-bottom: 5px;
  }

`;



