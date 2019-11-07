import React from 'react';
import Icon from 'react-icons';

import { Botao } from './styles';

export default function Button({ texto, tipo, handle, icon }) {
  return (
    <Botao type={tipo} onClick={handle}>
      <Icon type={icon}></Icon>
      {texto}
    </Botao>
  );
}
