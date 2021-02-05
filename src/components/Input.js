import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  color: var(--white-blue);
  border-radius: 4px;
  border: 1px solid var(--white-border);
  margin: 0.5rem 0;

  &::placeholder {
    color: var(--white-blue);
  }
`;

export default Input;
