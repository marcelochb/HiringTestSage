import styled from 'styled-components';
import { darken } from 'polished';

export const Botao = styled.button`
  display: 'flex';
  margin: 5px 15px 0;
  padding: 0 15px;
  height: 44px;
  max-width: 172px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.03, '#F94D6A')};
  }
  svg {
    margin-right: 5px;
  }
`;
