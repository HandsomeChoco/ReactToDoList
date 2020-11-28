import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
  border: none;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
  background: purple;
  border-radius: 7px;
`;

export const StyledBtn = ({ onClick, color, children }) => {
  return (
    <Btn onClick={onClick} color={color}>
      {children}
    </Btn>
  );
};

StyledBtn.defaultProps = {
  children: '버튼',
};

const Button = React.memo(({ style, onClick, text }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
});

export default Button;
