import api from './api';

class BuscaCep {
  async run({ code }) {
    try {
      const response = await api.get(
        `http://apps.widenet.com.br/busca-cep/api/cep.json`,
        {
          params: { code },
        }
      );
      const { city, district, address, message } = response.data;

      return {
        cidade: city,
        bairro: district,
        rua: address,
        message,
      };
    } catch (err) {
      return { message: err.message };
    }
  }
}

export default new BuscaCep();
