import styled, {css} from 'styled-components'
// TODO: usunąć box shadow przy scrollu, blur poprawić
export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${({isTransparent}) => (!isTransparent ? 'transparent' : 'black')};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  opacity: ${({isTransparent}) => (!isTransparent ? '1' : '0.5')};
  transition: 0.2s ease-in-out;
  position: fixed;
  backdrop-filter: blur(5px);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  position: relative;

  img {
    height: 55px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  svg{
    font-size: 25px;
    cursor: pointer;
  }
`;

