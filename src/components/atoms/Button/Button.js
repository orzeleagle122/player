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
  border-radius: 16px;
  border: #2d3ddf;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
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