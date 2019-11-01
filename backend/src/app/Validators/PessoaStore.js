import { object, string, date, number } from 'yup';

export default async (req, res, next) => {
  try {
    const schema = object().shape({
      nome: string().required(),
      sexo: string().required(),
      cpf: string().required(),
      nascimento: date().required(),
      cep: string().required(),
      rua: string().required(),
      numero: number(),
      bairro: string().required(),
      cidade: string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.errors });
  }
};
