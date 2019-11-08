import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Choice } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import { MdInput, MdSystemUpdateAlt, MdRestore } from 'react-icons/md';

import {
  Container,
  Content,
  DadosPessoais,
  Endereco,
  VoltarButton,
  SubmitButton,
  ContinueButton,
  ChoiceField,
} from './styles';
import api from '~/services/api';
import history from '~/services/history';

import BuscaCep from '~/services/BuscaCep';
import schema from '~/validators/PessoaTodos';
import schemaDadosPessoais from '~/validators/PessoaDadosPessoais';

/**
 * Opções do campo Choice
 */
const options = [
  { value: 'Feminino', label: 'Feminino' },
  { value: 'Masculino', label: 'Masculino' },
];

export default function UpdatePessoas() {
  const pessoa = useSelector(state => state.pessoa.detail);

  const [visible, setVisible] = useState(true);
  const [nome, setNome] = useState(pessoa.nome);
  const [sexo, setSexo] = useState(pessoa.sexo);
  const [cpf, setCpf] = useState(pessoa.cpf);
  const [nascimento, setNascimento] = useState(
    format(parseISO(pessoa.nascimento), 'dd/MM/yyyy')
  );
  /**
   * Estado para setar os erros de validação
   */
  const [errorNome, setErrorNome] = useState([]);
  const [errorSexo, setErrorSexo] = useState([]);
  const [errorCpf, setErrorCpf] = useState([]);
  const [errorNascimento, setErrorNascimento] = useState([]);

  /**
   * Estado para receber a busca pelo cep
   */
  const [cep, setCep] = useState(pessoa.cep);
  const [rua, setRua] = useState(pessoa.rua);
  const [cidade, setCidade] = useState(pessoa.cidade);
  const [bairro, setBairro] = useState(pessoa.bairro);

  /**
   * Function que busca
   * o endereço pelo CEP
   */
  async function handleCep(cep) {
    try {
      const { cidade, bairro, rua, message } = await BuscaCep.run({
        code: cep,
      });

      if (message) return toast.warn(message);

      setRua(rua);
      setCidade(cidade);
      setBairro(bairro);

      toast.success('Cep Localizado com sucesso.');

      document.getElementById('numero').focus();
    } catch (err) {}
  }

  /**
   * Function que valida e seta os erros
   */
  async function handleVisible() {
    try {
      schemaDadosPessoais.validateSync(
        { nome, sexo, cpf, nascimento },
        { abortEarly: false }
      );
      setVisible(!visible);
    } catch (error) {
      error.inner.forEach(e => {
        switch (e.path) {
          case 'nome':
            setErrorNome(e.message);
            break;
          case 'sexo':
            setErrorSexo(e.message);
            break;
          case 'cpf':
            setErrorCpf(e.message);
            break;
          case 'nascimento':
            setErrorNascimento(e.message);
            break;

          default:
            break;
        }
      });
    }
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
      const [dia, mes, ano] = nascimento.split('/');
      const formatedData = parseISO(`${ano}-${mes}-${dia}`);
      await api.put(`pessoas/${pessoa.id}`, {
        nome,
        sexo,
        cpf,
        nascimento: formatedData,
        cep,
        rua,
        numero,
        bairro,
        cidade,
      });
      toast.success('Atualizado com sucesso.');
      history.push('/');
    } catch (err) {
      const { error } = err.response.data;
      toast.error(error);
    }
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit} initialData={pessoa}>
          <DadosPessoais visible={visible}>
            <strong>Sobre Você</strong>
            <Input
              name="nome"
              placeholder="Digite seu nome completo"
              onChange={e => setNome(e.target.value)}
            />
            {errorNome && <span>{errorNome}</span>}
            <ChoiceField>
              <Choice
                name="sexo"
                options={options}
                onChange={e => setSexo(e.target.value)}
              />
            </ChoiceField>
            {errorSexo && <span>{errorSexo}</span>}
            <InputMask
              mask="999.999.999-99"
              onChange={e => setCpf(e.target.value)}
              value={cpf}
            >
              {() => <Input name="cpf" placeholder="Digite o cpf" />}
            </InputMask>
            {errorCpf && <span>{errorCpf}</span>}

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
            {errorNascimento && <span>{errorNascimento}</span>}
          </DadosPessoais>

          <Endereco visible={visible}>
            <strong>Endereço</strong>

            <InputMask
              mask="99999-999"
              value={cep}
              onChange={e => setCep(e.target.value)}
              onBlur={e => handleCep(e.target.value)}
            >
              {() => <Input name="cep" placeholder="Digite o cep" />}
            </InputMask>
            <Input
              name="rua"
              placeholder="Digite a rua"
              value={rua}
              onChange={e => setRua(e.target.value)}
            />
            <Input name="numero" type="number" placeholder="Digite o numero" />
            <Input
              name="bairro"
              placeholder="Digite o bairro"
              value={bairro}
              onChange={e => setBairro(e.target.value)}
            />
            <Input
              name="cidade"
              placeholder="Digite o cidade"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
            />
          </Endereco>
          <aside>
            <VoltarButton
              tipo="button"
              texto="Voltar"
              visible={!visible}
              Icon={MdRestore}
              handle={() => setVisible(!visible)}
            />
            <ContinueButton
              id="continuar"
              tipo="button"
              texto="Continuar..."
              Icon={MdInput}
              visible={visible}
              handle={handleVisible}
            />
            <SubmitButton
              id="submit"
              texto="Salvar"
              tipo="submit"
              Icon={MdSystemUpdateAlt}
              visible={!visible}
            />
          </aside>
        </Form>
      </Content>
    </Container>
  );
}
