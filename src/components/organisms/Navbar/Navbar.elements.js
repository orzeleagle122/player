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
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: relative;
  padding-left: 10%;
  padding-right: 10%;

  img {
    height: 55px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  svg {
    font-size: 25px;
    cursor: pointer;
  }
`;

export const AccountWrapper = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;

  img {
    border-radius: 50%;
    width: 40px;
    height: auto;
  }
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    font-weight: normal;
    margin: 0;
  }

  span {
    font-size: 12px;
  }
`;

