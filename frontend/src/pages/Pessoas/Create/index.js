import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { createPessoaRequest } from '~/store/modules/pessoa/actions';

import { Container, Content, DadosPessoais, Endereco, Voltar } from './styles';

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
  const [nome, setNome] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [cpf, setCpf] = useState([]);
  const [nascimento, setNascimento] = useState([]);

  async function handleVisible() {
    try {
      const schemaDadosPessoais = Yup.object().shape({
        nome: Yup.string().required('O Nome é obrigatório'),
        sexo: Yup.string().required('O Sexo é obrigatório'),
        cpf: Yup.string().required('A CPF é obrigatório'),
        nascimento: Yup.string().required('A Data de nascimento é obrigatória'),
      });

      schemaDadosPessoais.validateSync(
        { nome, sexo, cpf, nascimento },
        { abortEarly: false }
      );
      setVisible(!visible);
    } catch (error) {}
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

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <DadosPessoais visible={visible}>
            <strong>Sobre Você</strong>
            <Input
              name="nome"
              placeholder="Digite seu nome completo"
              onChange={e => setNome(e.target.value)}
              value={nome}
            />
            <Input
              name="sexo"
              placeholder="Digite o sexo"
              onChange={e => setSexo(e.target.value)}
              value={sexo}
            />
            <Input
              name="cpf"
              placeholder="Digite o cpf"
              onChange={e => setCpf(e.target.value)}
              value={cpf}
            />
            <Input
              name="nascimento"
              placeholder="Digite a data de nascimento"
              onChange={e => setNascimento(e.target.value)}
              value={nascimento}
              mask="99/99/9999"
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
            <Voltar type="button" visible={visible}>
              Voltar
            </Voltar>
            <button type="submit" onClick={handleVisible}>
              {visible ? 'Continuar...' : 'Salvar'}
            </button>
          </aside>
        </Form>
      </Content>
    </Container>
  );
}
