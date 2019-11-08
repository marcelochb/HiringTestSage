import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  padding: 0 25px;
`;

export const Content = styled.div`
  max-width: 940px;
  margin: 50px auto;
  header {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    strong {
      color: #fff;
      font-size: 32px;
    }
  }
  ul {
    display: grid;
    grid-gap: 10px;
    margin-top: 50px;
  }
`;

export const Linha = styled.li`
  padding: 20px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-self: center;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.6 : 1)};
  span {
    display: flex;
    align-items: center;
    margin-top: 2px;
    color: #999;
    align-self: center;
    svg {
      margin-left: 30px;
      align-self: center;
      color: #fff;
      cursor: pointer;
      font-size: 24px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
export const Nome = styled.strong`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const CreateButton = styled(Button)``;
