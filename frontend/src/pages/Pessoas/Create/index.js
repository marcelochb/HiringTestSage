import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import InputMask from 'react-input-mask';

import {
  Container,
  Content,
  DadosPessoais,
  Endereco,
  VoltarButton,
  SubmitButton,
} from './styles';
import api from '~/services/api';
import history from '~/services/history';
import { toast } from 'react-toastify';

const schemaEndereco = Yup.object().shape({
  // nome: Yup.string().required('O Nome é obrigatório'),
  // sexo: Yup.string().required('O Sexo é obrigatório'),
  // cpf: Yup.string().required('O CPF é obrigatório'),
  // nascimento: Yup.string().required('A Data de nascimento é obrigatória'),
  cep: Yup.string().required('O Cep é obrigatório'),
  rua: Yup.string().required('A rua é obrigatória'),
  numero: Yup.number().required('O numero é obrigatório'),
  bairro: Yup.string().required('O bairro é obrigatório'),
  cidade: Yup.string().required('A cidade é obrigatório'),
});

const schemaDadosPessoais = Yup.object().shape({
  nome: Yup.string().required('O Nome é obrigatório'),
  sexo: Yup.string().required('O Sexo é obrigatório'),
  cpf: Yup.string().required('A CPF é obrigatório'),
  nascimento: Yup.string().required('A Data de nascimento é obrigatória'),
});

export default function CreatePessoas() {
  const [visible, setVisible] = useState(true);
  const [nome, setNome] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [cpf, setCpf] = useState([]);
  const [nascimento, setNascimento] = useState([]);

  async function handleVisible() {
    try {
      schemaDadosPessoais.validateSync(
        { nome, sexo, cpf, nascimento },
        { abortEarly: false }
      );
      setVisible(!visible);
    } catch (error) {}
  }

  async function handleSubmit({
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
    try {
      await api.post('pessoas', {
        nome,
        sexo,
        cpf,
        nascimento,
        cep,
        rua,
        numero,
        bairro,
        cidade,
      });
      toast.success('Cadastro realizado com sucesso.');

      setNome('');
      setSexo('');
      setCpf('');
      setNascimento('');

      history.push('/');
    } catch (err) {
      toast.error('Falha ao fazer o cadastro.');
    }
  }

  return (
    <Container>
      <Content>
        <Form
          schema={visible ? schemaDadosPessoais : schemaEndereco}
          onSubmit={handleSubmit}
        >
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
            <InputMask
              mask="999.999.999-99"
              onChange={e => setCpf(e.target.value)}
              value={cpf}
            >
              {() => <Input name="cpf" placeholder="Digite o cpf" />}
            </InputMask>
            <InputMask
              mask="99/99/9999"
              onChange={e => setNascimento(e.target.value)}
              value={nascimento}
            >
              {() => (
                <Input
                  name="nascimento"
                  placeholder="Digite a data de nascimento (dd/mm/yyyy)"
                />
              )}
            </InputMask>
          </DadosPessoais>

          <Endereco visible={visible}>
            <strong>Endereço</strong>
            <InputMask mask="99.999-999">
              {() => <Input name="cep" placeholder="Digite seu cep completo" />}
            </InputMask>
            <Input name="rua" placeholder="Digite a rua" />
            <Input name="numero" type="number" placeholder="Digite o numero" />
            <Input name="bairro" placeholder="Digite o bairro" />
            <Input name="cidade" placeholder="Digite o cidade" />
          </Endereco>
          <aside>
            <VoltarButton type="button" visible={visible}>
              Voltar
            </VoltarButton>
            <SubmitButton id="submit" type="submit" onClick={handleVisible}>
              {visible ? 'Continuar...' : 'Salvar'}
            </SubmitButton>
          </aside>
        </Form>
      </Content>
    </Container>
  );
}
