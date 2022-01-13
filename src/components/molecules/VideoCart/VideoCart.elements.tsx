import styled from 'styled-components'

interface ICard {
    image:string
}

export const Card = styled.div<ICard>`
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
    color: white;
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