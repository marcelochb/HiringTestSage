import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { createPessoaRequest } from '~/store/modules/pessoa/actions';

import { Container, Content, DadosPessoais, Endereco } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('O Nome é obrigatório'),
  sexo: Yup.string().required('O Sexo é obrigatório'),
  cpf: Yup.string().required('A CPF é obrigatório'),
  nascimento: Yup.string().required('A Data de nascimento é obrigatória'),
  cep: Yup.string().required('O Nome é obrigatório'),
  rua: Yup.string().required('O Sexo é obrigatório'),
  numero: Yup.string().required('A CPF é obrigatório'),
  bairro: Yup.string().required('A CPF é obrigatório'),
  cidade: Yup.string().required('A CPF é obrigatório'),
});

export default function CreatePessoas() {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  async function handleVisible() {
    setVisible(!visible);
  }

  function handleSubmit({
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
    if (visible) {
      console.log('entrou');
      setVisible(!visible);
    } else {
      dispatch(
        createPessoaRequest(
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
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <DadosPessoais visible={visible}>
            <strong>Sobre Você</strong>
            <Input name="nome" placeholder="Digite seu nome completo" />
            <Input name="sexo" placeholder="Digite o sexo" />
            <Input name="cpf" placeholder="Digite o cpf" />
            <Input
              name="nascimento"
              placeholder="Digite a data de nascimento"
            />
          </DadosPessoais>

          <Endereco visible={visible}>
            <strong>Endereço</strong>
            <Input name="cep" placeholder="Digite seu cep completo" />
            <Input name="rua" placeholder="Digite a rua" />
            <Input name="numero" placeholder="Digite o numero" />
            <Input name="bairro" placeholder="Digite o bairro" />
            <Input name="cidade" placeholder="Digite o cidade" />
          </Endereco>
          <aside>
            <button type="submit" onClick={handleVisible}>
              {visible ? 'Continuar...' : 'Salvar'}
            </button>
          </aside>
        </Form>
      </Content>
    </Container>
  );
}
