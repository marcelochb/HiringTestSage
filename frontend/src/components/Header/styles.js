import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 25px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #fff;
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
