import styled from 'styled-components';

export const FormField = styled.form`
  padding: 20px 20px;
  background: #b7b7b721;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-right: 20px;
  font: inherit;
  width: 500px;
  border: none;
  box-shadow: 0px 2px 5px 1px #b7b7b7;
  &:hover,
  &:focus {
    outline: none;
    border-color: #79f7f9;
    box-shadow: 0 0 10px #79f7f9;
    transition-duration: 300ms;
  }
`;

export const TextKeyword = styled.p`
  color: #b7b7b7;
`;
