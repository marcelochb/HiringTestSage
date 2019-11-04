import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHighlightOff, MdLoyalty } from 'react-icons/md';
// import { toast } from 'react-toastify';

import { Container, Content, Linha, Nome } from './styles';

import api from '~/services/api';

export default function Dasshboard() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    async function loadPessoas() {
      const response = await api.get('pessoas');

      setPessoas(response.data);
    }
    loadPessoas();
  }, [pessoas]);

  return (
    <Container>
      <Content>
        <header>
          <strong>Pessoas</strong>
          <Link to="/create">
            <button type="button">
              <MdLoyalty />
              Novo
            </button>
          </Link>
        </header>
        <ul>
          {pessoas.map(pessoa => (
            <Linha key={pessoa.id}>
              <Nome>{pessoa.nome}</Nome>
              <span>
                {pessoa.cidade}
                <MdHighlightOff />
              </span>
            </Linha>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
