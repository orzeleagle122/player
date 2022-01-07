import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${({isTransparent}) => (!isTransparent ? 'black' : 'transparent')};
  opacity: ${({isTransparent}) => (!isTransparent ? '1' : '0.5')};
  transition: 0.2s ease-in-out;
  border-bottom: ${({isTransparent}) => (!isTransparent ? '2px dotted white' : 'none')};;
  position: fixed;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  img {
    height: 55px;
  }
`;