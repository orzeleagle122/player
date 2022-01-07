import React from 'react';
import styled, {css} from 'styled-components'

const ButtonWrapper = styled.button`
  text-transform: uppercase;
  height: 38px;
  width: 100%;
  padding: 5px 10px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease-in-out;
  
  svg{
    font-size: 20px;
  }

  &:hover {
    opacity: 0.8;
  }

  ${({facebook}) => facebook && css`
    background-color: #1977F2;
  `}
  
  ${({apple}) => apple && css`
    background-color: black;
  `}

`;

const SocialButton = (props) => {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default SocialButton;