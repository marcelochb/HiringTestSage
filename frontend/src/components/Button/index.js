import React from 'react';
import 'react-icons/all';
import { Botao } from './styles';

export default function Button({ texto, tipo, handle, Icon }) {
  return (
    <Botao type={tipo} onClick={handle}>
      {Icon && <Icon />}
      {texto}
    </Botao>
  );
}
