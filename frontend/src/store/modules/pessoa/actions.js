export function createPessoaRequest(
  nome,
  sexo,
  cpf,
  nascimento,
  cep,
  rua,
  numero,
  bairro,
  cidade
) {
  return {
    type: '@pessoa/CREATE_REQUEST',
    payload: { nome, sexo, cpf, nascimento, cep, rua, numero, bairro, cidade },
  };
}

export function updatePessoaRequest(
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
) {
  return {
    type: '@pessoa/UPDATE_REQUEST',
    payload: {
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
    },
  };
}

export function updatePessoaSuccess(pessoa) {
  return {
    type: '@pessoa/UPDATE_SUCCESS',
    payload: { pessoa },
  };
}

export function detailPessoaRequest(
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
) {
  return {
    type: '@pessoa/DETAIL_REQUEST',
    payload: {
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
    },
  };
}

export function destroyPessoaRequest(id) {
  return {
    type: '@pessoa/DESTROY_REQUEST',
    payload: { id },
  };
}
