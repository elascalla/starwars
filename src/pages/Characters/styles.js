import styled from 'styled-components';
import { darken } from 'polished';

export const CharactersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-color: #333;
    border-radius: 4px;
    padding: 20px;
    
    > strong {
      font-size: 15px;
      line-height: 20px;
      margin-top: 5px;
    }
    > span {
      font-size: 12px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      background: black;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.06, '#333')};
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  label {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
  }
  select {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #333;
    margin: 0 0 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  button {
    background: black;
    height: 50px;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.06, '#333')};
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;