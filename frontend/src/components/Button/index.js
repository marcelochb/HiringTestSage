import React from 'react';
import 'react-icons/all';
import { Botao } from './styles';

export default function Button({ texto, tipo, handle, Icon, visible }) {
  return (
    <Botao type={tipo} onClick={handle} visible={visible}>
      {Icon && <Icon />}
      {texto}
    </Botao>
  );
}
