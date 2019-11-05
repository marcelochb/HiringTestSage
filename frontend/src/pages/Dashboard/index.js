import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdHighlightOff, MdLoyalty } from 'react-icons/md';

import { Container, Content, Linha, Nome } from './styles';

import {
  destroyPessoaRequest,
  detailPessoaRequest,
} from '~/store/modules/pessoa/actions';
import api from '~/services/api';

export default function Dasshboard() {
  const [pessoas, setPessoas] = useState([]);
  const dispatch = useDispatch();

  async function loadPessoas() {
    const response = await api.get('pessoas');

    setPessoas(response.data);
  }

  useEffect(() => {
    loadPessoas();
  }, [pessoas]);

  async function handleDestroy({ id }) {
    dispatch(destroyPessoaRequest(id));
  }

  function handleDetail({
    nome,
    sexo,
    cpf,
    nascimento,
    cep,
    rua,
    numero,
    bairro,
    cidade,
  }) {
    dispatch(
      detailPessoaRequest(
        nome,
        sexo,
        cpf,
        nascimento,
        cep,
        rua,
        numero,
        bairro,
        cidade
      )
    );
  }

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
              <Link to="/update">
                <Nome onClick={() => handleDetail(pessoa)}>{pessoa.nome}</Nome>
              </Link>
              <span>
                {pessoa.cidade}
                <MdHighlightOff onClick={() => handleDestroy(pessoa)} />
              </span>
            </Linha>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
