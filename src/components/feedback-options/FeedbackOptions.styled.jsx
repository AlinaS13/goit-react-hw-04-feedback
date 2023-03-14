import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 5px;
  width: 100px;
  height: 35px;
  color: teal;
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
  background: lightblue;
  border: 1px solid;
  border-radius: 50px;

  cursor: pointer;
  &:hover,
  &:focus {
    color: lightblue;
    background: teal;
  }
`;
