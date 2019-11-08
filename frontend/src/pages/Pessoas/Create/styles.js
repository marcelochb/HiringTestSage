import styled from 'styled-components';
import Button from '~/components/Button';

export const Container = styled.div`
  padding: 0 25px;
`;
export const Content = styled.div`
  max-width: 940px;
  margin: 50px auto;
  form {
    margin-top: 30px;
    aside {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const DadosPessoais = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  strong {
    color: #fff;
    font-size: 32px;
    margin-bottom: 15px;
  }
  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;

export const Endereco = styled.div`
  display: ${props => (props.visible ? 'none' : 'flex')};
  flex-direction: column;
  strong {
    color: #fff;
    font-size: 32px;
    margin-bottom: 15px;
  }
  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;

export const VoltarButton = styled(Button)``;

export const SubmitButton = styled(Button)``;

export const ContinueButton = styled(Button)``;

export const ChoiceField = styled.div`
  display: flex;

  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;
  input {
    /* margin: 0 15px; */
  }
  label {
    align-self: center;
    margin: 0 10px;
    /* padding: 0 1px; */
  }
`;
