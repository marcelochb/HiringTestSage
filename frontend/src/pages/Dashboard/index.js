import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdHighlightOff, MdLoyalty } from 'react-icons/md';

import { Container, Content, Linha, Nome, CreateButton } from './styles';

import { detailPessoaRequest } from '~/store/modules/pessoa/actions';
import api from '~/services/api';
import { toast } from 'react-toastify';

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
    try {
      await api.delete(`pessoas/${id}`);

      toast.success('Pessoa deletada com sucesso.');

      loadPessoas();
    } catch (err) {
      toast.error('Falha ao deletar.');
    }
  }
  /**
   * Function pega os dados da pessoa
   * e salva em um estado global (reducer)
   */
  function handleDetail({
    id,
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
        id,
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
            <CreateButton
              tipo="button"
              texto="Novo"
              Icon={MdLoyalty}
            ></CreateButton>
          </Link>
        </header>
        <ul>
          {pessoas.map(pessoa => (
            <Linha key={pessoa.id}>
              <Nome onClick={() => handleDetail(pessoa)}>{pessoa.nome}</Nome>
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
