import styled from 'styled-components';
import { darken } from 'polished';

export const Botao = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: #d44059;
  border: 0;
  border-radius: 4px;
  height: 42px;
  max-width: 172px;
  color: #fff;
  font-size: 16px;
  padding: 0 15px;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.08, '#d44059')};
  }
  svg {
    margin-right: 8px;
    font-size: 20px;
  }
`;
