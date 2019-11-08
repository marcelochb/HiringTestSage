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
