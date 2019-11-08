import styled from 'styled-components';
import { darken } from 'polished';

export const Botao = styled.button`
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0 5px;
  background: rgba(0, 220, 0, 0.7);
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
    background: ${darken(0.08, 'rgba(0, 220, 0, 0.7)')};
  }
  svg {
    margin-right: 8px;
    font-size: 20px;
  }
`;
