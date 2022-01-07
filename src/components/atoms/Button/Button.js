import React from 'react';
import styled, {css} from 'styled-components'

const ButtonWrapper = styled.button`
  height: 38px;
  width: 156px;
  padding: 5px 10px;
  background-color: #2d3ddf;
  color: white;
  font-weight: 700;
  font-size: 15px;
  margin-top: 20px;
  border-radius: 10px;
  border: #2d3ddf;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  &:hover {
    background-color: #EBEDFF;
    color: black;
    border: 3px solid #2d3ddf;

    ${({isGrey}) => isGrey && css`
      background-color: #EBEDFF;
      border: 5px solid gray;
    `}
  }

  ${({isGrey}) => isGrey && css`
    background-color: gray;
    border: gray;
  `}
  
  ${({isBig}) => isBig && css`
    width: 200px;
  `}

`;

const Button = (props) => {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;