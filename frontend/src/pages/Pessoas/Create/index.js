import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('O Nome é obrigatório'),
  sexo: Yup.string().required('O Sexo é obrigatório'),
  cpf: Yup.string().required('A CPF é obrigatório'),
  nascimento: Yup.string().required('A Data de nascimento é obrigatória'),
});

const options = [
  { id: 'feminino', title: 'Feminino' },
  { id: 'masculino', title: 'Masculino' },
];
export default function CreatePessoas() {
  return (
    <Container>
      <Content>
        <strong>Sobre Você</strong>
        <Form schema={schema}>
          <Input name="nome" placeholder="Digite seu nome completo" />
          <Select name="sexo" placeholder="Escolha o sexo" options={options} />
          <Input name="cpf" placeholder="Digite o cpf" />
          <Input name="nascimento" placeholder="Digite a data de nascimento" />
          <aside>
            <button>Continuar</button>
          </aside>
        </Form>
      </Content>
    </Container>
  );
}
