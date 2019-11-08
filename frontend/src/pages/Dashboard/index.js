import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdHighlightOff,
  MdOpenInNew,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import {
  Container,
  Content,
  Linha,
  Nome,
  CreateButton,
  Footer,
  Page,
  SetaDireita,
  SetaEsquerda,
} from './styles';

import { detailPessoaRequest } from '~/store/modules/pessoa/actions';
import api from '~/services/api';
import { toast } from 'react-toastify';

export default function Dasshboard() {
  const [pessoas, setPessoas] = useState([]);
  const [page, setPage] = useState(1);
  const [visibleDireita, setVisibleDireita] = useState(false);
  const [visibleEsquerda, setVisibleEsquerda] = useState(false);
  const [visiblePage, setVisiblePage] = useState(false);
  const dispatch = useDispatch();

  async function loadPessoas() {
    const response = await api.get(`pessoas?page=${page}`);
    const qtd = response.data && response.data.length;
    /**
     * Verificações para visualizar
     * as mudanças de paginas
     */
    setVisibleDireita(qtd === 5 ? true : false);
    setVisibleEsquerda(page > 1 ? true : false);
    setVisiblePage(page === 1 && qtd < 5 ? false : true);
    setPessoas(response.data);
  }

  useEffect(() => {
    loadPessoas();
  }, [page]);

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
              Icon={MdOpenInNew}
              visible={true}
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
        <Footer>
          <Page visible={visiblePage}>
            <SetaEsquerda visible={visibleEsquerda}>
              <MdChevronLeft
                onClick={() => (page > 1 ? setPage(page - 1) : setPage(1))}
              />
            </SetaEsquerda>
            <span>{page}</span>
            <SetaDireita visible={visibleDireita}>
              <MdChevronRight onClick={() => setPage(page + 1)} />
            </SetaDireita>
          </Page>
        </Footer>
      </Content>
    </Container>
  );
}
