import { object, string, date, number } from 'yup';

export default async (req, res, next) => {
  try {
    const schema = object().shape({
      nome: string(),
      sexo: string(),
      cpf: string(),
      nascimento: date(),
      cep: string(),
      rua: string(),
      numero: number(),
      bairro: string(),
      cidade: string(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.errors });
  }
};
